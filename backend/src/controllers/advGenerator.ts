import { Request, Response, NextFunction} from "express"
import { advGeneration } from "../services/advGeneratorService.js";

//La idea es que la request tenga la informacion del viaje y que esta informacion se pase al servicio para ejecutar el prompt
const advGenerator = async (req: Request, res:Response, next: NextFunction) => {
    //antes de nada extraeremos la informacion del body que vendra como un array y lo uniremos en un string
    try {
        const generator = advGeneration as any;
        const service = await generator.generate(req.body.caracteristics);
        res.status(200).json(service);
    } catch (error) {
        //mandamos el error a un middleware
        next(error);
    }

}

export default advGenerator;