import { Router } from "express";
import { createEvent, deleteEvent, getInterestedUsers, updateEvent } from "../../controllers/admin.controllers.js";

const adminRouter = Router()

adminRouter.post("/event", createEvent)

adminRouter.put("/event/:id", updateEvent)

adminRouter.delete("/event/:id", deleteEvent)

adminRouter.get('/event/:eventId/interested-users', getInterestedUsers)

export default adminRouter