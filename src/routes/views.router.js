import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';

const router = Router();

router.get('/', viewsController.getIndex);
router.get('/users', viewsController.getUsers);
router.get('/pets', viewsController.getPets);

export default router;