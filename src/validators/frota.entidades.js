import { body } from 'express-validator';
import { verificarErros } from '../middlewares/validator.middleware.js';

export const regrasValidacaoFrota = [
    // Regras de Validação para frota

    // Middleware genérico de Validação
    verificarErros
];

export default regrasValidacaoFrota;