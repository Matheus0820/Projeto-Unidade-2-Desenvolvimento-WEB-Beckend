import ClienteService from '../services/clientes.service.js';

class WebController {
    static async listClientesPage(req, res, next) {
        try {
            const clientesDto = await ClienteService.findAll();

            res.render('clientes', {
                title: 'Clientes Cadastrados',
                clientes: clientesDto
            });

        } catch(error) {
            next(error);
        }
    }
}

export default WebController;