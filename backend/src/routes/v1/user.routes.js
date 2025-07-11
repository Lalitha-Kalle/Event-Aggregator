import { Router } from "express";

const userRouter = Router()

userRouter.get("/profile", getUserProfile)

userRouter.post("/interest/:eventId", markInterest) 

export default userRouter