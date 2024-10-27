import express from 'express';
import PlanController from '../controllers/planController.js';

const planRouter = express.Router();

planRouter.get('/:user_id', PlanController.getPlanFromUser);
planRouter.post('/', PlanController.addPlan);
planRouter.delete('/:id', PlanController.deletePlan);
planRouter.patch('/:id', PlanController.updatePlan);

export default planRouter;