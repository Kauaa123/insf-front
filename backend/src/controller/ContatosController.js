import { Router } from "express";
import { consultarContatos, inserirContato } from "../repository/ContatosRepository.js";
import ValidarContatos from "../validation/ValidarContatos.js";

const endpoint = Router();

endpoint.post('/contatos', async (req, resp) => {
    try {
        ValidarContatos(req);
        
        let obj = req.body;
        let id = await inserirContato(obj)

        resp.send({
            id: id
        })
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoint.get('/contatos', async (req, resp) => {
    try {
        let id = await consultarContatos();

        resp.send({
            contatos: id
        })
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoint;
