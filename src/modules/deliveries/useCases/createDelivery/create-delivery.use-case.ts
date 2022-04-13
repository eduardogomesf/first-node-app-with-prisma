import { prisma } from "../../../../database/primsaClient";
import { ICreateDelivery } from "./create-delivery.interface";

export class CreateDeliveryUseCase {

    async execute({ id_client, item_name }: ICreateDelivery) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })

        return delivery
    }

}