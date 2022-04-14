import { prisma } from "../../../../database/primsaClient";

export class FindAllDeliveriesUseCase {

    async execute(id: string) {
        const userWithDeliveries = await prisma.clients.findFirst({
            where: {
                id
            },
            include: {
                Deliveries: true
            }
        })

        return userWithDeliveries
    }

}