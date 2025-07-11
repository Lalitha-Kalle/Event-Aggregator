import { Router } from "express";
import { createEvent, getInterestedUsers, updateEvent } from "../../controllers/admin.controllers.js";

const adminRouter = Router()

adminRouter.post("/event", createEvent)

adminRouter.put("/event/:id", updateEvent)

adminRouter.get('/event/:eventId/interested-users', getInterestedUsers)

export default adminRouter