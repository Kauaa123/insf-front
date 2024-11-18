import con from './Connection.js';

export async function inserirContato(contato) {
    const comando = `
    insert into tb_contatos(ds_titulo, ds_informacoes, ds_impacto, dt_ocorrencia, ds_atribuir)
    values(?, ?, ?, ?, ?);
    `
    let resp = await con.query(comando, [contato.titulo, contato.informacoes, contato.impacto, contato.ocorrencia, contato.atribuir]);
    let infos = resp[0];
    return infos.insertId;
}

export async function consultarContatos() {
    const comando = `
    select * from tb_contatos;
    `
    let resp = await con.query(comando);
    return resp[0];
}