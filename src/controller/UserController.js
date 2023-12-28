import { userModel } from "../model/UserModel.js"

export const  getAllUsers = async(req, res) => {
    const user = await userModel.find({})
    res.send(user)
}

export const  getByIdUsers = async(req, res) => {
    const { id } = req.params
    const user = await userModel.findById(id)
    res.send(user)
}

export const createUser = async(req, res) => {
    const {Username, Email,Password,Age,isMarried} = req.body
    const newUsers = new userModel({Username, Email,Password,Age,isMarried})
    await newUsers.save()
    res.send('Got a POST request')
}

export const updateUser = async(req, res) => {
    const {id}=req.params
    const {Username, Email,Password,Age,isMarried}=req.body
    const user = await userModel.findByIdAndUpdate(id,{Username, Email,Password,Age,isMarried})
    res.send(user)
}

export const deleteUser =  async(req, res) => {
    const {id} = req.params
    const user = await userModel.findByIdAndDelete(id)
    res.send(user)
}