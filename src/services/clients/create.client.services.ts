import AppDataSoucer from "../../data-source"
import { Client } from "../../entities/client.entity"
import { IClientRequest, IClient } from "../../interfaces/clients"
import { hash } from "bcrypt"

const createClientService = async ({ name, email, telephone, password }: IClientRequest): Promise<IClient> => {
  const clientRepository = AppDataSoucer.getRepository(Client)

  const clients = await clientRepository.find()

  const emailAlreadyExists = clients.find(client => client.email === email)
  if (emailAlreadyExists) {
    throw new Error("Email already exists")
  }

  const hashedPassword = await hash(password, 10)
  const client = clientRepository.create({
    name,
    email,
    telephone,
    password: hashedPassword,
  })
  await clientRepository.save(client)

  return client
}

export default createClientService;