import React from "react"

export default (params) => {
    const status = params.nota >= 7 ? "Aprovado" : "Reprovado";

    return (
        <div>
            <h2>{params.title}</h2>
            <p>
                <strong> {params.aluno} </strong>
                tem nota
                <strong> {params.nota} </strong>
                e está
                <strong> {status} </strong>
            </p>
        </div>
    )
};