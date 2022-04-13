import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensure-authenticated-client.middleware";
import { AuthenticateClientController } from "../modules/account/authenticateClient/authenticate-client.controller";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/authenticate-deliveryman.controller";
import { CreateClientController } from "../modules/clients/useCases/createClient/create-client.controller";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/create-delivery.controller";
import { FindAllAvailableController } from "../modules/deliveries/useCases/findAllAvailable/find-all-available.controller";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/create-deliveryman.controller";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

routes.post('/authenticate/client', authenticateClientController.handle)
routes.post('/authenticate/deliveryman', authenticateDeliverymanController.handle)

routes.post('/client', createClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/delivery', ensureAuthenticatedClient, createDeliveryController.handle)
routes.get('/delivery/available', findAllAvailableController.handle)

export { routes }