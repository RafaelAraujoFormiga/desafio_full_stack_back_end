import AppDataSource from '../../data-source'
import { IContactRequest } from '../../interfaces/contacts'
import { Contacts } from '../../entities/contacts.entity'
import { Client } from '../../entities/client.entity'


const createContactService = async ({
    name,
    emailContact,
    telephone }: IContactRequest,
    clientId: string): Promise<Contacts> => {

    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contacts)

    const client = await clientRepository.findOneBy({
        clientId
    })

    const contact = contactRepository.create({
        name,
        emailContact,
        telephone,
        client: client!
    })
    await contactRepository.save(contact)

    return contact
}

export default createContactService