import { Router } from 'express'

import UserController from './controllers/UserController'
import AddressController from './controllers/AddressController'

const routes = Router()

// User Routes
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

// Address Routes
routes.get('/address', AddressController.index)
routes.post('/address', AddressController.store)

export default routes
