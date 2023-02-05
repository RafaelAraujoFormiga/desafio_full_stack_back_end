import { Request, Response } from "express"
import { IContact } from "../interfaces/contacts"
import createContactService from "../services/contacts/create.contact.service"
import { AppError, handleError } from "../erros/AppErro"
import propertiesListService from "../services/contacts/list.contacts.service"


const createContactController = async (request: Request, response: Response) => {
    try {
        const contact: IContact = request.body
        const clientId: string = request.client.clientId

        const createdProperty = await createContactService(contact, clientId)

        return response.status(201).json(createdProperty)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, response)
        }
    }
}

const contactsListController = async (request: Request, response: Response) => {
    try {
        const clientId = request.client.clientId
        const contacts = await propertiesListService(clientId)

        return response.json(contacts)
    } catch (err) {

        if (err instanceof Error) {
            return response.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export { createContactController, contactsListController }
