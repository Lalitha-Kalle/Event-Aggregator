import { Router } from "express";
import { getUserProfile, markInterest } from "../../controllers/user.controllers.js";

const userRouter = Router()

userRouter.get("/profile", getUserProfile)

userRouter.post("/interest/:eventId", markInterest) 

export default userRouter