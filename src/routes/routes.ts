import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateClient/authenticate-client.controller";
import { CreateClientController } from "../modules/clients/useCases/createClient/create-client.controller";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

routes.post('/authenticate/client', authenticateClientController.handle)
routes.post('/client', createClientController.handle)

export { routes }