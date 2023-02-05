import { Request, Response } from "express"
import { IClientRequest, IClientUpdate } from "../interfaces/clients"
import createClientService from "../services/clients/create.client.services"
import clientListService from "../services/clients/list.clients.service"
import clientDeleteSelfService from "../services/clients/client.delete.service"
import updateClientService from "../services/clients/client.update.service"
import { instanceToPlain } from "class-transformer"
import { handleError, AppError } from "../erros/AppErro"


const createClientController = async (request: Request, response: Response) => {
    try {
        const client: IClientRequest = request.body
        const createdClient = await createClientService(client)
        return response.status(201).json(instanceToPlain(createdClient))
    } catch (error) {
        if (error instanceof Error)
            return response.status(400).json({
                message: error.message
            })
    }
}

const clientListController = async (request: Request, res: Response) => {
    try {
        const clients = await clientListService()
        return res.send(instanceToPlain(clients))
    } catch (err) {

        if (err instanceof Error) {
            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

const clientDeleteSelfController = async (request: Request, res: Response) => {

    try {
        const clientId: string = request.params.clientId
        await clientDeleteSelfService(clientId)
        return res.status(204).json({ message: "Client deleted with sucess!" })

    } catch (err) {
        if (err instanceof Error) {
            return res.status(404).send({
                "message": err.message
            })
        }
    }
}

const updateClientController = async (req: Request, res: Response) => {
    const client: IClientUpdate = req.body
    const clientId: string = req.params.clientId
    try {
        const updatedClient = await updateClientService(client, clientId)

        return res.status(200).json(instanceToPlain(updatedClient))

    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }
}

export { createClientController, clientListController, updateClientController, clientDeleteSelfController }