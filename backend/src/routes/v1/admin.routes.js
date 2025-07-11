import { Router } from "express";
import { getInterestedUsers } from "../../controllers/admin.controllers.js";

const adminRouter = Router()

adminRouter.get('/event/:eventId/interested-users', getInterestedUsers)

export default adminRouter