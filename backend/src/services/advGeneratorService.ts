import { InferenceClient } from "@huggingface/inference";

export class advGeneration {
    
    async generate(caracteristics: string[]) {
        const SYSTEM_PROMPT: string = `Eres un creador de viajes y el usuario te da una lista de caracteristicas con las que tienes que crear 
                                        tu viaje. No hace falta que incluyas todas las caracteristicas y tampoco es necesario que solo tenga las 
                                        caracteristicas que te proporcionen. Dentro del viaje puedes recomendar paises y actividades. Formatea tu
                                        respuesta a markdown para que sea mas facil el renderizado en la web ` ;

        const message: string = caracteristics.join(", ");
        const hf: InferenceClient = new InferenceClient(process.env.HUGGING_FACE_API_KEY);
            const response = await hf.chatCompletion({
                model: "Qwen/Qwen2.5-3B-Instruct",
                messages:[
                    { role: "system", content: SYSTEM_PROMPT},
                    { role: "user", content: `I want you to make me a trip that takes into account: ${message}`}
                ],
                 max_tokens: 1500
            }); 

            const choice = response?.choices?.[0];
            return choice?.message?.content ?? "";
        
    }

}