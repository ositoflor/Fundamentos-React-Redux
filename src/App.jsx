import "./App.css";
import React from "react";


import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="Exercicio Repetição" color="#00FA9A">
                    <TabelaProdutos />
                </Card>

                <Card titulo="Repetição" color="#00FFFF">
                    <ListaAlunos />
                </Card>


                <Card titulo="Componente com Filhos" color="#87CEEB">
                    <Familia sobrenome="Flor">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Paulo" />
                        <FamiliaMembro nome="Carla" />
                    </Familia>
                </Card>


                <Card titulo="Desafio Aleatório" color="#C71585">
                    <Aleatorio min={0} max={80} />
                </Card>

                <Card titulo="Fragmento" color="#DC143C">
                    <Fragmento />
                </Card>

                <Card titulo="Com Parâmetro" color="#D8BFD8">
                    <ComParametro title='Situação do Aluno(a)' aluno='Osito' nota={10} />

                </Card>

                <Card titulo="Primeiro Componente" color="#00FA9A">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
};