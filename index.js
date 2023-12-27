import express  from 'express';
import mongoose, { Schema } from 'mongoose';

const app = express()
const port = 3000
app.use(express.json())

const userSchema = new Schema({
    Username: String, 
    Email: String,
    Password: Number,
    Age: Number,
    isMarried: String,

  });
  const userModel = mongoose.model('myusers', userSchema)

app.get("/", async(req, res) => {
    const user = await userModel.find({})
    res.send(user)
})


app.get('/:id', async(req, res) => {
    const { id } = req.params
    const user = await userModel.findById(id)
    res.send(user)
})


app.post('/', async(req, res) => {
    const {Username, Email,Password,Age,isMarried} = req.body
    const newUsers = new userModel({Username, Email,Password,Age,isMarried})
    await newUsers.save()
    res.send('Got a POST request')
})


app.put('/:id', async(req, res) => {
    const {id}=req.params
    const {Username, Email,Password,Age,isMarried}=req.body
    const user = await userModel.findByIdAndUpdate(id,{Username, Email,Password,Age,isMarried})
    res.send(user)
})


app.delete('/:id', async(req, res) => {
    const {id} = req.params
    const user = await userModel.findByIdAndDelete(id)
    res.send(user)
})

mongoose.connect('mongodb+srv://mahammad:mahammad@cluster0.errjuf4.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})