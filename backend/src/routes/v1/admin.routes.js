import { Router } from "express";
import { createEvent, getInterestedUsers } from "../../controllers/admin.controllers.js";

const adminRouter = Router()

adminRouter.post("/event", createEvent)

adminRouter.get('/event/:eventId/interested-users', getInterestedUsers)

export default adminRouter