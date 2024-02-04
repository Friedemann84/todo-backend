import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import todoRouter from './routes/todoRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const PORT = process.env.PORT;
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.r0o75cc.mongodb.net/todoApp-backend`;
const app = express();

mongoose.connect(URI)
  .then(() => console.log('Mit mongoDB verbunden...'))
  .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => console.log(err));

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/todos', todoRouter);
app.use('/user', userRouter);

// 404
app.use((req, res, next) => {
  const error = new Error('404 - path doesn`t exist!');
  error.status = 404;
  next(error);
});

// errorHandler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send({error: err.message});
});


app.listen(PORT, () => {
  console.log(`Server runs on P🪩 RT:${PORT} 🕺`);
});

