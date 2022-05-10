// packages imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// dev dependencies
import colors from 'colors';
import morgan from 'morgan';

// database imports
import connectDb from './config/db.js';

// Router Imports
import leadsRoutes from "./routes/leadsRoutes.js"

// config loaded
dotenv.config();

// database connected
connectDb();

// initialize app
const app = express();

// GLOBAL MIDDLEWARE

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors({origin:"*"}));

app.get('/', (req, res) => {
  res.send(`Welcome to DocDBI server`);
});

// Routes
app.use('/api/leads/', leadsRoutes)




const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `SERVER RUNNING IN`.yellow.bold,
    `${process.env.NODE_ENV}`.red.bold,
    `MODE ON ${PORT}`.magenta.bold
  )
);

// unhandled rejection handler
process.on('unhandledRejection', (err) => {
  console.error(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
