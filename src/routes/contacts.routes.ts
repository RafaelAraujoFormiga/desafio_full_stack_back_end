import { Router } from "express";
import { createContactController, contactsListController } from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAutho.middleware";


const contactsRoute = Router();

contactsRoute.post('/contact', ensureAuthMiddleware, createContactController)
contactsRoute.get('/contacts', ensureAuthMiddleware, contactsListController)

export default contactsRoute;