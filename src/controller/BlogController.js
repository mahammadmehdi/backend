import { blogModel } from "../model/BlogModel.js"


export const  getAllBlogs = async(req, res) => {
    const blog = await blogModel.find({})
    res.send(blog)
}

export const  getByIdBlogs = async(req, res) => {
    const { id } = req.params
    const blog = await blogModel.findById(id)
    res.send(blog)
}

export const createBlog = async(req, res) => {
    const {name,author,body} = req.body
    const newblogs = new blogModel({name,author,body})
    await newblogs.save()
    res.send('Got a POST request')
}

export const updateBlog = async(req, res) => {
    const {id}=req.params
    const {name,author,body}=req.body
    const blog = await blogModel.findByIdAndUpdate(id,{name,author,body})
    res.send(blog)
}

export const deleteBlog =  async(req, res) => {
    const {id} = req.params
    const blog = await blogModel.findByIdAndDelete(id)
    res.send(blog)
}