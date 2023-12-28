import { Router } from "express";
import {  createUser,  deleteUser,  getAllUsers,  getByIdUsers,  updateUser } from "../controller/UserController.js";
import { myLogger } from "../middleware/loggerMiddleWare.js";
export const userRouter = Router();


userRouter.get("/user",myLogger,getAllUsers )
userRouter.get('/user/:id',myLogger, getByIdUsers)
userRouter.post('/user',myLogger,createUser )
userRouter.put('/user/:id',myLogger,updateUser )
userRouter.delete('/user/:id',myLogger,deleteUser)