import { Request, Response, NextFunction } from 'express'
import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"

const ensureIsActiveMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const clientId: string = req.params.clientId
    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({
        clientId
    })
    if (client?.isActive === false) {
        return res.status(400).json({
            message: 'Client not found!'
        })
    }
    return next()
}

export default ensureIsActiveMiddleware