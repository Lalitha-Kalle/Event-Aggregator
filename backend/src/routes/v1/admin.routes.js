import { Router } from "express";

const adminRouter = Router()

adminRouter.get('/events/:eventId/interested', getInterestedUsers)

export default adminRouter