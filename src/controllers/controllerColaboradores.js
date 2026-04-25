// Importando Dados
import db from '../config/database.js';

// Listar colaboradores
export const listarColaborador = (req, res) => {
    res.status(200).json(db.data.colaboradores)
};

// Criar Colaborador
export const criarColaborador = async (req, res) => {
    return;
};

// Buscar Colaborador por ID
export const buscarColaboradorID = (req, res) => {
    return;
};

// PUT Colaborador - Modificar todos os dados de um colaborador
export const putColaborador = async (req, res) => {
    return;
};

// PATCH Colaborador - Modificar pelo menos um dados do colaboraodor
export const patchColaborador = async (req, res) => {
    return;
};

// Remover Colaborador
export const deletarColaborador = async (req, res) => {
    return;
};