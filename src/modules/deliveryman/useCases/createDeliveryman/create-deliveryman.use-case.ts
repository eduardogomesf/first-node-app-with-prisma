import { hash } from "bcrypt"
import { prisma } from "../../../../database/primsaClient"
import { ICreateDeliveryman } from "./create-deliveryman.interface"
export class CreateDeliverymanUseCase {

    async execute({ password, username }: ICreateDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: 'insensitive',
                    equals: username
                }
            }
        })

        if (deliverymanExists) {
            throw new Error('Deliveryman already exists')
        }

        const hashedPassword = await hash(password, 10)

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        return deliveryman
    }

}