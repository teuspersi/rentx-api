/* eslint-disable import/prefer-default-export */
import { Router } from 'express';
import ensureAuthentication from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthentication);
specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
