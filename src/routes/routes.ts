import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateClient/authenticate-client.controller";
import { CreateClientController } from "../modules/clients/useCases/createClient/create-client.controller";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/create-deliveryman.controller";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/authenticate/client', authenticateClientController.handle)
routes.post('/client', createClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

export { routes }