import './index.scss';
import Cabecalho from '../../components/cabecalho';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Listar() {
    const [lista, setLista] = useState([]);
    const [pesquisa, setPesquisa] = useState(''); 

    async function consultar() {
        const url = 'http://localhost:5000/contatos';
        try {
            let resp = await axios.get(url);
            setLista(resp.data.contatos); 
        } catch (err) {
            console.error('Erro ao consultar dados:', err);
        }
    }

    useEffect(() => {
        consultar();
    }, []); 

    const PesquisaTabela = lista.filter(item =>
        item.ds_titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
        item.ds_informacoes.toLowerCase().includes(pesquisa.toLowerCase()) ||
        item.ds_impacto.toLowerCase().includes(pesquisa.toLowerCase()) ||
        item.ds_atribuir.toLowerCase().includes(pesquisa.toLowerCase()) ||
        item.dt_ocorrencia.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
        <div className="secao-listar-chamado">
            <Cabecalho />

        <div className="tabela">
            <div className="input-filtro">
                 <input type="text" placeholder="Filtrar..." value={pesquisa} onChange={e => setPesquisa(e.target.value)} />
            </div>
           
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Informações</th>
                        <th>Impacto</th>
                        <th>Data</th>
                        <th>Atribuído</th>
                    </tr>
                </thead>

                <tbody>
                    {PesquisaTabela.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ds_titulo}</td>
                                <td>{item.ds_informacoes}</td>
                                <td>{item.ds_impacto}</td>
                                <td>{new Date(item.dt_ocorrencia).toLocaleDateString()}</td>
                                <td>{item.ds_atribuir}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="botao-chamado">
                <Link to='/criarChamado'>
                <button>Novo Chamado</button>
                </Link>
                
            </div>
        </div>
            
        </div>
    );
}
