import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    name: String, 
    author: String,
    body: String,
    

  });
 export const blogModel = mongoose.model('myblog', blogSchema)