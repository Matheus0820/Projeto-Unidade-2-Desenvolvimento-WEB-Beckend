import { Router } from 'express';
import {
    listarFrota, criarFrota,
    buscarFrotaID, putFrota,
    patchFrota, deletarFrota
} from '../controllers/controllerFrotas.js';
import { validatorFrota } from '../validators/validatorFrota.js';

const router = Router();

router.get('/', listarFrota);
router.post('/', validatorFrota, criarFrota);
router.get('/:id', buscarFrotaID);
router.put('/:id', validatorFrota, putFrota);
router.patch('/:id', validatorFrota, patchFrota);
router.delete('/:id', deletarFrota);

export default router;