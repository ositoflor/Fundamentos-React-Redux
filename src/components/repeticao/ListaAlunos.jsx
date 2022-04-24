import './ListaAlunos.css';
import React from "react";
import alunos from "../../data/alunos";

export default () => {

    const listaAlunos = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    // console.log(listaAlunos);
    return (
        <div>
            <ul className="lista">
                {listaAlunos}
            </ul>
        </div>
    )
}