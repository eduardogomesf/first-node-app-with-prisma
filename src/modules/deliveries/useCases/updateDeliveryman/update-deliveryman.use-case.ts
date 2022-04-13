import { prisma } from "../../../../database/primsaClient";
import { IUpdateDeliveryman } from "./update-deliveryman.interface";

export class UpdateDeliverymanUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
        console.log(id_delivery, id_deliveryman)

        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })

        return result
    }
}