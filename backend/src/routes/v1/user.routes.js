import { Router } from "express";
import { getEvents, getUserProfile, markInterest } from "../../controllers/user.controllers.js";

const userRouter = Router()

userRouter.get("/profile", getUserProfile)

userRouter.get("/events", getEvents)

userRouter.post("/interest/:eventId", markInterest) 

export default userRouter