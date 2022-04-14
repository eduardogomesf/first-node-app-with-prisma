import { prisma } from "../../../../database/primsaClient";

export class FindAllDeliveriesUseCase {

    async execute(id: string) {
        const userWithDeliveries = await prisma.clients.findFirst({
            where: {
                id
            },
            select: {
                Deliveries: true,
                id: true,
                username: true
            }
        })

        return userWithDeliveries
    }

}