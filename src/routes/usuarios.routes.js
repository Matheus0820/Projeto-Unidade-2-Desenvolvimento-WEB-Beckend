import { Router } from 'express';
import {
    listarUsuarios, criarUsuarios,
    buscarUsuariosID, putUsuarios,
    patchUsuarios, deletarUsuarios
} from '../controllers/usuarios.controller.js';
import { validatorUsuarios } from '../validators/usuarios.validator.js';

const router = Router();

router.get('/', listarUsuarios);
router.post('/', validatorUsuarios, criarUsuarios);
router.get('/:id', buscarUsuariosID);
router.put('/:id', validatorUsuarios, putUsuarios);
router.patch('/:id', validatorUsuarios, patchUsuarios);
router.delete('/:id', deletarUsuarios);

export default router;