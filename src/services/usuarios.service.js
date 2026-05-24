import UsuarioRepository from '../repositories/usuarios.repository.js';
import { UsuarioDto } from '../dtos/usuarios.dto.js';

class UsuarioService {

    static async findAll() {
        const usuarios = await UsuarioRepository.findAll();
        return usuarios.map(usuario => new UsuarioDto(usuario));
    }

    static async findById(id) {
        const usuario = await UsuarioRepository.findById(id);

        if (!usuario) {
            throw Object.assign(
                new Error('Usuário com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        return new UsuarioDto(usuario);
    }

    static async create(usuarioData) {
        const newUsuarioFromDb = await UsuarioRepository.create(usuarioData);
        return new UsuarioDto(newUsuarioFromDb);
    }

    static async put(usuarioData, id) {
        const usuarioSalvo = await UsuarioRepository.findById(id);

        if (!usuarioSalvo) {
            throw Object.assign(
                new Error('Usuário com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        const usuarioUpdateDb = await UsuarioRepository.update({
            nome: usuarioData.nome,
            email: usuarioData.email,
            nivelAcesso: usuarioData.nivelAcesso
        }, id);

        return new UsuarioDto(usuarioUpdateDb);
    }

    static async patch(usuarioData, id) {
        const usuarioSalvo = await UsuarioRepository.findById(id);

        if (!usuarioSalvo) {
            throw Object.assign(
                new Error('Usuário com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        const dadosAtualizados = {
            nome: usuarioData.nome ?? usuarioSalvo.nome,
            email: usuarioData.email ?? usuarioSalvo.email,
            nivelAcesso: usuarioData.nivelAcesso ?? usuarioSalvo.nivelAcesso
        };

        const usuarioUpdateDb = await UsuarioRepository.update(dadosAtualizados, id);

        return new UsuarioDto(usuarioUpdateDb);
    }

    static async delete(id) {
        const usuarioSalvo = await UsuarioRepository.findById(id);

        if (!usuarioSalvo) {
            throw Object.assign(
                new Error('Usuário com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        const usuarioRemovido = await UsuarioRepository.delete(id);

        return new UsuarioDto(usuarioRemovido);
    }
}

export default UsuarioService;