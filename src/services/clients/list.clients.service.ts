import AppDataSource from "../../data-source"
import { Client } from "../../entities/client.entity"

const clientsListService = async () => {

    const clientsRepository = AppDataSource.getRepository(Client)

    const clients = clientsRepository.find()

    return clients
}

export default clientsListService