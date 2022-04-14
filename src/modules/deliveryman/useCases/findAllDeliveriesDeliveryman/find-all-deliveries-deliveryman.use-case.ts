import { prisma } from "../../../../database/primsaClient";

export class FindAllDeliveriesDeliverymanUseCase {

    async execute(id: string) {
        const deliverymanWithDeliveries = await prisma.deliveryman.findFirst({
            where: {
                id
            },
            select: {
                Deliveries: true,
                id: true,
                username: true
            }
        })

        return deliverymanWithDeliveries
    }

}