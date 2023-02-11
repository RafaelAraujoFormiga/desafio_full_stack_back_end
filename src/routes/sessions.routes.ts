import { Router } from "express"
import { createSessionController } from "../controllers/sessions.controllers"
const sessionRoutes = Router()

sessionRoutes.post('/sessions', createSessionController)

export default sessionRoutes