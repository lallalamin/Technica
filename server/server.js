import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import statementsRouter from './routes/statements.js';
import planRouter from './routes/plan.js';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,      
};
app.use(cors(corsOptions));

// Database connection
Connection();

// Use routes
app.use('/api/statements', statementsRouter);
app.use('/api/plan', planRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
