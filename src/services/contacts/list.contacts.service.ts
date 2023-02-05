import AppDataSource from "../../data-source"
import { Contacts } from "../../entities/contacts.entity"
import { Client } from "../../entities/client.entity"


const contactsListService = async (clientId: string) => {

    const contactsRepository = AppDataSource.getRepository(Contacts)
    const clientRepository = AppDataSource.getRepository(Client)

    const clientFind = await clientRepository.findOneBy({ clientId })

    // const contacts = await contactsRepository.find({
    //     where: {
    //         client: clientFind!,
    //     },
    // })

    return clientFind?.contacts
}

export default contactsListService
