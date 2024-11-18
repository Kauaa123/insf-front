import ContatosController from './controller/ContatosController.js';

export default function Rotas(server) {
    server.use(ContatosController)
}