import { Request, Response } from "express"
import { IClientLogin } from "../interfaces/clients"
import createSessionService from "../services/sessions/createSessions.service"

const createSessionController = async (request: Request, response: Response) => {
    try {
        const data: IClientLogin = request.body
        const token = await createSessionService(data)
        return response.status(200).json(token)
    } catch (error) {
        if (error instanceof Error) {
            return response.status(403).json({
                message: error.message
            })
        }
    }
}

export { createSessionController }