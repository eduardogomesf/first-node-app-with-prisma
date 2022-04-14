import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./find-all-deliveries-deliveryman.use-case";

export class FindAllDeliveriesDeliverymanController {

    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request

        const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase()

        const result = await findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman)

        return response.status(200).json(result)
    }

}