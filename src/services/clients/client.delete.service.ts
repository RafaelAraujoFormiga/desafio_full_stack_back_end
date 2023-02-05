import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"


const clientDeleteSelfService = async (clientId: string): Promise<void> => {

    const clientRepository = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOneBy({
        clientId
    })
    if (!client) {
        throw new Error('Client not found')
    }
    await clientRepository.update(
        clientId,
        {
            isActive: false
        }
    )
}

export default clientDeleteSelfService