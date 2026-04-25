import { Router } from 'express';
import {
    listarColaborador, criarColaborador,
    buscarColaboradorID, putColaborador,
    patchColaborador, deletarColaborador
} from '../controllers/controllerColaboradores.js';
import { validatorColaborador } from '../validators/validatorColaborador.js';

const router = Router();

router.get('/', listarColaborador);
router.post('/', validatorColaborador, criarColaborador);
router.get('/:id', buscarColaboradorID);
router.put('/:id', validatorColaborador, putColaborador);
router.patch('/:id', validatorColaborador, patchColaborador);
router.delete('/:id', deletarColaborador);

export default router; 