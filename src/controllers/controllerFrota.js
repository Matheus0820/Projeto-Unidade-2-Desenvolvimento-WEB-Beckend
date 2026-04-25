// Importando Dados
import db from '../config/database.js';

// Listar frotas
export const listarFrota = (req, res) => {
    res.status(200).json(db.data.frotas)
};

// Criar Frota
export const criarFrota = async (req, res) => {
    return;
};

// Buscar Frota por ID
export const buscarFrotaID = (req, res) => {
    return;
};

// PUT Frota - Modificar todos os dados de um frota
export const putFrota = async (req, res) => {
    return;
};

// PATCH Frota - Modificar pelo menos um dados do frota
export const patchFrota = async (req, res) => {
    return;
};

// Remover Frota
export const deletarFrota = async (req, res) => {
    return;
};