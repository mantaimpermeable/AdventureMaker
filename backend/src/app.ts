import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';

const app: Application = express();

//Permitimos el cross origin resource sharing 
app.use(cors({
    origin: "http://localhost:5137",
    credentials: true
}));

app.use(express.json());
//si no usamos urlencoded el body de la request estara vacia y no podremos mirar la informacion
app.use(express.urlencoded({ extended: true}))

app.use('/auth', authRoutes)
app.use('/api/user', userRoutes);

//manejamos todos los errores que puedan ocurrir en la aplicacion
app.use(errorHandler);

export default app;