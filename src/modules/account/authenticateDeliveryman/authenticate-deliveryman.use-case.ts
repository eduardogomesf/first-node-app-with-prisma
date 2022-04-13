import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/primsaClient"
import { IAuthenticateClient } from "./authenticate-deliveryman.interface"

export class AuthenticateDeliverymanUseCase {

    async execute({ password, username }: IAuthenticateClient) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        const invalidCredentialsErrorMessage = 'Username or password incorrect'

        if (!deliveryman) {
            throw new Error(invalidCredentialsErrorMessage)
        }

        const passwordMach = await compare(password, deliveryman.password)

        if (!passwordMach) {
            throw new Error(invalidCredentialsErrorMessage)
        }

        const secretKey = process.env.TOKEN_SECRET_KEY as string

        const token = sign({ username }, secretKey, { expiresIn: '1d', subject: deliveryman.id })

        return token
    }
}