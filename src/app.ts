import express, { Request, Response } from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import chatRoutes from './routes/chatRoutes';

import { errorHandler } from "./middleware/errorHandler"
import assistantRouter from "./routes/assistandRoutes";
import sendEmailRouter from "./routes/sendEmail.route";



import "dotenv/config"

export const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/chat', assistantRouter);
app.use('/api', sendEmailRouter)

app.use(errorHandler);
