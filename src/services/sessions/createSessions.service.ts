import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"
import { IClientLogin } from "../../interfaces/clients"
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

const createSessionService = async ({ email, password }: IClientLogin): Promise<object> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({
        email: email
    })
    if (!client) {
        throw new Error("Invalid client or pasword")
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
        throw new Error("Invalid client or pasword")
    }

    const createdToken = jwt.sign({
        clientId: client.clientId
    },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: client.clientId
        }
    )
    return { token: createdToken }

}

export default createSessionService