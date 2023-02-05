import AppDataSource from '../../data-source'
import { Client } from '../../entities/client.entity'
import { IClientUpdate } from '../../interfaces/clients'
import { hash } from 'bcrypt'
import { AppError } from '../../erros/AppErro'

const updateClientService = async ({ name, email, password, telephone }: IClientUpdate, clientId: string): Promise<Client> => {

    const clientRepository = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOneBy({
        clientId
    })
    if (!findClient) {
        throw new AppError(404, 'User not found')
    }
    await clientRepository.update(
        clientId,
        {
            name: name ? name : findClient.name,
            email: email ? email : findClient.email,
            telephone: telephone ? telephone : findClient.telephone,
            password: password ? await hash(password, 10) : findClient.password
        }
    )
    const client = await clientRepository.findOneBy({
        clientId
    })

    return client!
}

export default updateClientService