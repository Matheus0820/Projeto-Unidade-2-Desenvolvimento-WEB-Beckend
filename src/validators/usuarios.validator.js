import { body } from 'express-validator';
import { verificarErros } from '../middlewares/validator.middleware.js';

export const regrasValidacaoUsuarios = [
    // Regras de Validação de Usuários

    
    // Middleware genérico de Validação
    verificarErros
];

export default regrasValidacaoUsuarios;