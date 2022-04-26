import React from "react";

export default props => {

    const cb = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * 70)
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>filho</div>
            <button onClick={_ => cb('Pedro', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}