import ColaboradorRepository from '../repositories/colaboradores.repository.js';
import { ColaboradorDto } from '../dtos/colaboradores.dto.js';

class ColaboradorService {

    static async findAll() {
        const colaboradores = await ColaboradorRepository.findAll();

        return colaboradores.map(
            colaborador => new ColaboradorDto(colaborador)
        );
    }

    static async findById(id) {
        const colaborador = await ColaboradorRepository.findById(id);

        if (!colaborador) {
            throw Object.assign(
                new Error('Colaborador com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        return new ColaboradorDto(colaborador);
    }

    // Função interna para recalcular os dados
    static calcularDados(colaboradorData) {
        let horasTrabalhoPorDiaCalc = 0;

        if (["Ajudante", "Técnico", "Engenheiro"].includes(colaboradorData.funcao)) {
            horasTrabalhoPorDiaCalc = 8;
        } else {
            horasTrabalhoPorDiaCalc = 6;
        }

        let horaFimExpedienteCalc =
            Number(colaboradorData.horaInicioExpediente) + horasTrabalhoPorDiaCalc;

        if (horaFimExpedienteCalc > 24) {
            horaFimExpedienteCalc = horaFimExpedienteCalc % 24;
        }

        return {
            horasTrabalhoPorDia: horasTrabalhoPorDiaCalc,
            horaFimExpediente: horaFimExpedienteCalc
        };
    }

    static async create(colaboradorData) {
        const calculado = this.calcularDados(colaboradorData);

        const newColaboradorData = {
            nome: colaboradorData.nome,
            funcao: colaboradorData.funcao,
            horaInicioExpediente: colaboradorData.horaInicioExpediente,
            horaFimExpediente: calculado.horaFimExpediente,
            horasTrabalhoPorDia: calculado.horasTrabalhoPorDia
        };

        const newColaboradorFromDb =
            await ColaboradorRepository.create(newColaboradorData);

        return new ColaboradorDto(newColaboradorFromDb);
    }

    static async put(colaboradorData, id) {
        const colaboradorSalvo = await ColaboradorRepository.findById(id);

        if (!colaboradorSalvo) {
            throw Object.assign(
                new Error('Colaborador com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        const calculado = this.calcularDados(colaboradorData);

        const updateData = {
            nome: colaboradorData.nome,
            funcao: colaboradorData.funcao,
            horaInicioExpediente: colaboradorData.horaInicioExpediente,
            horaFimExpediente: calculado.horaFimExpediente,
            horasTrabalhoPorDia: calculado.horasTrabalhoPorDia
        };

        const colaboradorUpdateDb =
            await ColaboradorRepository.update(updateData, id);

        return new ColaboradorDto(colaboradorUpdateDb);
    }

    static async patch(colaboradorData, id) {
        const colaboradorSalvo = await ColaboradorRepository.findById(id);

        if (!colaboradorSalvo) {
            throw Object.assign(
                new Error('Colaborador com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        const mergedData = {
            nome: colaboradorData.nome ?? colaboradorSalvo.nome,
            funcao: colaboradorData.funcao ?? colaboradorSalvo.funcao,
            horaInicioExpediente:
                colaboradorData.horaInicioExpediente ??
                colaboradorSalvo.horaInicioExpediente
        };

        const calculado = this.calcularDados(mergedData);

        const updateData = {
            nome: mergedData.nome,
            funcao: mergedData.funcao,
            horaInicioExpediente: mergedData.horaInicioExpediente,
            horaFimExpediente: calculado.horaFimExpediente,
            horasTrabalhoPorDia: calculado.horasTrabalhoPorDia
        };

        const colaboradorUpdateDb =
            await ColaboradorRepository.update(updateData, id);

        return new ColaboradorDto(colaboradorUpdateDb);
    }

    static async delete(id) {
        const colaboradorDelete = await ColaboradorRepository.findById(id);

        if (!colaboradorDelete) {
            throw Object.assign(
                new Error('Colaborador com ID informado não existe.'),
                { statusCode: 404 }
            );
        }

        await ColaboradorRepository.delete(id);

        return new ColaboradorDto(colaboradorDelete);
    }
}

export default ColaboradorService;