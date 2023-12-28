import express  from 'express';
import mongoose from 'mongoose';
import { userRouter } from './src/router/UserRoute.js';
import { blogRouter } from './src/router/BlogRoute.js';


const app = express()
const port = 3000
app.use(express.json())

app.use("/", userRouter);
app.use("/",blogRouter)


mongoose.connect('mongodb+srv://mahammad:mahammad@cluster0.errjuf4.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})