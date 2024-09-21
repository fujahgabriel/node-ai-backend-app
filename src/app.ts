import express, { Application } from 'express';
import dotenv from 'dotenv';
import aiRoutes from './routes/aiRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

// Route for AI API
app.use('/api/ai', aiRoutes);

export default app;
