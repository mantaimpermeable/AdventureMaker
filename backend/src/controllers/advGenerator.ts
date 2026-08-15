import { Request, Response, NextFunction} from "express"
import { advGeneratorService } from "../services/index.js";
import { GenerationError } from "../types/errors.types.js";

//La idea es que la request tenga la informacion del viaje y que esta informacion se pase al servicio para ejecutar el prompt
const advGenerator = async (req: Request, res:Response, next: NextFunction) => {
    //antes de nada extraeremos la informacion del body que vendra como un array y lo uniremos en un string
    try {
        const generator = new advGeneratorService();
        const service: string | GenerationError = await generator.generate(req.body.caracteristics);
        return res.status(200).json({ 
                                    adventure: service ,
                                    //TODO: cuando tenga sentido añadir mas caracteristicas para identificacion
                                    });
        
    } catch (error) {
        //mandamos el error a un middleware
        next(error);
    }

}

export default advGenerator;