import './index.scss'

export default function Cabecalho() {
    return(
        <div className="cabecalho">
                <div className="esquerda">
                    <img src="/assets/images/fone.png" alt="" />
                    <h1>Bem vindo, Pedro Moreira</h1>
                </div>

                <div className="direita">
                    <h1>Sair</h1>
                </div>
        </div>
    )
}