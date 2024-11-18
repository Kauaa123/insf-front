import './index.scss';
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast';
import {Link} from 'react-router-dom'

export default function Criar() {
    const [titulo, setTitulo] = useState('')
    const [informacoes, setInformacoes] = useState('')
    const [impacto, setImpacto] = useState('')
    const [data, setData] = useState('')
    const [atribuir, setAtribuir] = useState('')

    async function salvar() {
        if (!titulo || !informacoes || !impacto || data == null || !atribuir) {
            toast.error('Todos os campos são obrigatórios.');
            return;
        }

        try {
        const url = 'http://localhost:5000/contatos';
        let obj = {
            titulo: titulo,
            informacoes: informacoes,
            impacto: impacto,
            ocorrencia: data, 
            atribuir: atribuir
        }
        
        
        let resp = await axios.post(url, obj)
        toast.success('Chamado adicionado com sucesso!') 
        } catch (err) {
            toast.error(err.message)
        }
        
    }

    return(
        <div className="secao-criar-chamado">
            <Cabecalho />   

            <div className="imagem">
                <img src="/assets/images/pessoa.png" alt="" />
            </div>

            <div className="card-branco">
                <div className="infos">
                    <h1 id='corVermelha'>Detalhes do chamado</h1>
                    <h1>Título</h1>
                    <input type="text" placeholder='Informe um título...' value={titulo} onChange={e => setTitulo(e.target.value)} />

                    <h1>Informações</h1>
                    <input id='inputInfo' placeholder='Insira as informações aqui...' value={informacoes} onChange={e => setInformacoes(e.target.value)}></input>
                </div>

                <div className="infozin">
                    <div className="impacto">
                        <h1>Impacto</h1>
                        <select value={impacto} onChange={e => setImpacto(e.target.value)}>
                            <option></option>
                            <option>Alto</option>
                            <option>Médio</option>
                            <option>Baixo</option>
                        </select>
                    </div>

                    <div className="data">
                        <h1>Data de ocorrência</h1>
                        <input type="date" value={data} onChange={e => setData(e.target.value)}/>
                    </div>

                    <div className="atribuir">
                        <h1>Atribuir</h1>
                        <input type="text" placeholder='Selecione o usuário responsável...' value={atribuir} onChange={e => setAtribuir(e.target.value)} />
                    </div>
                </div>

                <div className="opcoes">
                    <button id='botaoBranco'><Link to='/'>Voltar</Link></button>
                    <button id='botaoVermelho' onClick={salvar}>Salvar</button>
                </div>  
            </div>
            <Toaster />
        </div>
    )
}