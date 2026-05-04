// Importando Dados
import db from '../config/database.js';

// Listar clientes
export const listarClientes = (req, res) => {
    res.status(200).json(db.data.clientes)
};

// Criar Clientes
export const criarClientes = async (req, res) => {
    return;
};

// Buscar Clientes por ID
export const buscarClientesID = (req, res) => {
    return;
};

// PUT Clientes - Modificar todos os dados de um clientes
export const putClientes = async (req, res) => {
    return;
};

// PATCH Clientes - Modificar pelo menos um dados do clientes
export const patchClientes = async (req, res) => {
    return;
};

// Remover Clientes
export const deletarClientes = async (req, res) => {
    return;
};