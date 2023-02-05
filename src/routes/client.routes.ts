import { Router } from "express";
import { createClientController, clientListController, updateClientController, clientDeleteSelfController } from "../controllers/clients.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAutho.middleware";
import ensureIsActiveMiddleware from "../middlewares/ensureIsActive.middleware";


const clientRout = Router();

clientRout.post('', createClientController)
clientRout.get('', ensureAuthMiddleware, clientListController)
clientRout.patch('/:clientId', ensureIsActiveMiddleware, ensureAuthMiddleware, updateClientController)
clientRout.delete('/:clientId', ensureIsActiveMiddleware, ensureAuthMiddleware, clientDeleteSelfController)

export default clientRout;