import { body } from 'express-validator';
import { verificarErros } from '../middlewares/validator.middleware.js';

export const regrasValidacaoColaborador = [
    // Regras de Validaçao de um Colaborador


    // Middleware genérico de validação
    verificarErros
];

export default regrasValidacaoColaborador;