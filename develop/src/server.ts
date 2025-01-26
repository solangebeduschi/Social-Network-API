import express, { Application, Request, Response } from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';

await db(); // Ensure database connection is established before starting the server

const PORT: number = Number(process.env.PORT) || 3001;
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
