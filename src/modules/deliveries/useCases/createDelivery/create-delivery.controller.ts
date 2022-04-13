import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./create-delivery.use-case";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const createDeliveryUseCase = new CreateDeliveryUseCase()

        const id_client = request.id_client

        const { item_name } = request.body;

        const result = await createDeliveryUseCase.execute({ id_client, item_name })

        return response.status(201).json(result)
    }
}