import { InferenceClient } from "@huggingface/inference";
import { DataCollectionError, GenerationError, ServiceError } from "../utils/errors.js";

export class advGeneration {
    
    async generate(caracteristics: string[]) {
        if (!caracteristics || caracteristics.length === 0) throw new DataCollectionError("No caracteristics provided", "The caracteristics array is empty or undefined");

        const SYSTEM_PROMPT: string = `Eres un creador de viajes y el usuario te da una lista de caracteristicas con las que tienes que crear 
                                        tu viaje. No hace falta que incluyas todas las caracteristicas y tampoco es necesario que solo tenga las 
                                        caracteristicas que te proporcionen. Dentro del viaje puedes recomendar paises y actividades. Formatea tu
                                        respuesta a markdown para que sea mas facil el renderizado en la web ` ;

        const message: string = caracteristics.join(", ");
        if(!message) throw new ServiceError("No message to send to the model", "The message is empty after joining the caracteristics array");

        const hf: InferenceClient = new InferenceClient(process.env.HUGGING_FACE_API_KEY);
            const response = await hf.chatCompletion({
                model: "Qwen/Qwen2.5-3B-Instruct",
                messages:[
                    { role: "system", content: SYSTEM_PROMPT},
                    { role: "user", content: `I want you to make me a trip that takes into account: ${message}`}
                ],
                 max_tokens: 1500
            }); 
        if(!response) throw new GenerationError("No response from the model", "The model did not return any response");

            // const choice = response?.choices?.[0];
            // return choice?.message?.content ?? "";
            return response.choices[0]?.message?.content ?? new GenerationError("No content in model response", "The model response did not contain any content");
        
    };

}