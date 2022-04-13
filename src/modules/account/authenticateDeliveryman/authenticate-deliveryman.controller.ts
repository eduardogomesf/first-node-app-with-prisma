import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./authenticate-deliveryman.use-case";

export class AuthenticateDeliverymanController {

    async handle(request: Request, response: Response) {
        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

        const { username, password } = request.body

        const result = await authenticateDeliverymanUseCase.execute({ username, password })

        return response.status(200).json(result)
    }
}