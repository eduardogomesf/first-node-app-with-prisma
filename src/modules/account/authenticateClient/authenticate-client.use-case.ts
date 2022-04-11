import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/primsaClient"
import { IAuthenticateClient } from "./authenticate-client.interface"
export class AuthenticateClientUseCase {

    async execute({ password, username }: IAuthenticateClient) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        const invalidCredentialsErrorMessage = 'Username or password incorrect'

        if (!client) {
            throw new Error(invalidCredentialsErrorMessage)
        }

        const passwordMach = await compare(password, client.password)

        if (!passwordMach) {
            throw new Error(invalidCredentialsErrorMessage)
        }

        const secretKey = process.env.TOKEN_SECRET_KEY as string

        const token = sign({ username }, secretKey, { expiresIn: '1d', subject: client.id })

        return token
    }
}