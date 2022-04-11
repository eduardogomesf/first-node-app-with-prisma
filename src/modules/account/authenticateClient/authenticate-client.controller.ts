import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticate-client.use-case";

export class AuthenticateClientController {

    async handle(request: Request, response: Response) {
        const authenticateClientUseCase = new AuthenticateClientUseCase()

        const { username, password } = request.body

        const result = await authenticateClientUseCase.execute({ username, password })

        return response.status(200).json(result)
    }
}