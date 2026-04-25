import { Router } from 'express';
import {
    listarClientes, criarClientes,
    buscarClientesID, putClientes,
    patchClientes, deletarClientes
} from '../controllers/controllerClientes.js';
import { validatorClientes } from '../validators/validatorClientes.js';

const router = Router();

router.get('/', listarClientes);
router.post('/', validatorClientes, criarClientes);
router.get('/:id', buscarClientesID);
router.put('/:id', validatorClientes, putClientes);
router.patch('/:id', validatorClientes, patchClientes);
router.delete('/:id', deletarClientes);

export default router;