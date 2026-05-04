// Importando Dados
import db from '../config/database.js';

// Listar usuários
export const listarUsuarios = (req, res) => {
    res.status(200).json(db.data.usuarios)
};

// Criar Usuarios
export const criarUsuarios = async (req, res) => {
    return;
};

// Buscar Usuarios por ID
export const buscarUsuariosID = (req, res) => {
    return;
};

// PUT Usuarios - Modificar todos os dados de um usuarios
export const putUsuarios = async (req, res) => {
    return;
};

// PATCH Usuarios - Modificar pelo menos um dados do usuarios
export const patchUsuarios = async (req, res) => {
    return;
};

// Remover Usuarios
export const deletarUsuarios = async (req, res) => {
    return;
};