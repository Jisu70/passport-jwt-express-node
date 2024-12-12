import dotenv from './env.config.js';
import express from 'express';
import router from './routes/auth/auth.routes.js';
import db from './config/db.config.js';

// Connect to the database before starting the server
db();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(8080, () => console.log('Server running on port 8080'));