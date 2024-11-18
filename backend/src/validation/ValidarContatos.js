import { inserirContato } from "../repository/ContatosRepository.js";

export default function ValidarContatos(req) {
    if (!req.body.titulo) throw new Error('O título é obrigatório.');
    if (!req.body.informacoes) throw new Error('As informações são obrigatórias.');
    if (!req.body.impacto) throw new Error('O impacto é obrigatório.');
    if (req.body.ocorrencia == null) throw new Error('A data de ocorrência é obrigatória.');
    if (!req.body.atribuir) throw new Error('O nome do responsável é obrigatório.');
}
