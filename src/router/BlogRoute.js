import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleWare.js";
import { createBlog, deleteBlog, getAllBlogs, getByIdBlogs, updateBlog } from "../controller/BlogController.js";
export const blogRouter = Router();


blogRouter.get("/blog",myLogger,getAllBlogs )
blogRouter.get('/blog/:id',myLogger, getByIdBlogs)
blogRouter.post('/blog',myLogger,createBlog )
blogRouter.put('/blog/:id',myLogger,updateBlog )
blogRouter.delete('/blog:id',myLogger,deleteBlog)