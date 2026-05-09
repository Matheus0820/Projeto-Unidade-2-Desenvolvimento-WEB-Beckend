import { Router } from 'express';
import WebController from '../controllers/web.controller.js';

const router = Router();

router.get('/clientes', WebController.listClientesPage);

export default router;