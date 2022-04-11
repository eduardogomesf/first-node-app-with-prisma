import { hash } from "bcrypt"
import { prisma } from "../../../../database/primsaClient"
import { ICreateClient } from "./create-client.interface"
export class CreateClientUseCase {

    async execute({ password, username }: ICreateClient) {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: 'insensitive'
                }
            }
        })

        if (clientExists) {
            throw new Error('Client already exists')
        }

        const hashedPassword = await hash(password, 10)

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        return client
    }

}