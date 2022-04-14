import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensure-authenticated-client.middleware";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensure-authenticated-deliveryman.middleware";
import { AuthenticateClientController } from "../modules/account/authenticateClient/authenticate-client.controller";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/authenticate-deliveryman.controller";
import { CreateClientController } from "../modules/clients/useCases/createClient/create-client.controller";
import { FindAllDeliveriesController } from "../modules/clients/useCases/findAllDeliveries/find-all-deliveries.controller";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/create-delivery.controller";
import { FindAllAvailableController } from "../modules/deliveries/useCases/findAllAvailable/find-all-available.controller";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/update-deliveryman.controller";
import { CreateDeliverymanController } from "../modules/deliveryman/useCases/createDeliveryman/create-deliveryman.controller";
import { FindAllDeliveriesDeliverymanController } from "../modules/deliveryman/useCases/findAllDeliveriesDeliveryman/find-all-deliveries-deliveryman.controller";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

routes.post('/authenticate/client', authenticateClientController.handle)
routes.post('/authenticate/deliveryman', authenticateDeliverymanController.handle)

routes.post('/client', createClientController.handle)
routes.get('/client/deliveries', ensureAuthenticatedClient, findAllDeliveriesController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticatedDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.post('/delivery', ensureAuthenticatedClient, createDeliveryController.handle)
routes.get('/delivery/available', ensureAuthenticatedDeliveryman, findAllAvailableController.handle)
routes.put('/delivery/:id/updateDeliveryman', ensureAuthenticatedDeliveryman, updateDeliverymanController.handle)

export { routes }