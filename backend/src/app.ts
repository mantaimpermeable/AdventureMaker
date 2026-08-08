import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app: Application = express();

//Permitimos el cross origin resource sharing 
app.use(cors({
    origin: "http://localhost:5137",
    credentials: true
}));

app.use(express.json());
//si no usamos urlencoded el body de la request estara vacia y no podremos mirar la informacion
app.use(express.urlencoded({ extended: true}))

app.use('/user', userRoutes);

export default app;