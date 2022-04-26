import "./App.css";
import React from "react";

import Contador from "./components/contador/Contador";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";


export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#12 - Contador" color="#8B4513">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="#11 - Componente Controlado" color="#008B8B">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#FFA07A">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#708090">
                    <DiretaPai />
                </Card>

                <Card titulo="#08 - Rederização Condicinal" color="#FFC0CB">
                    <ParOuImpar numero={31} />
                    <UsuarioInfo usuario={{ nome: 'Diego' }} />
                    <UsuarioInfo usuario={{}} />
                </Card>

                <Card titulo="#07 - Exercicio Repetição" color="#00FA9A">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição" color="#00FFFF">
                    <ListaAlunos />
                </Card>


                <Card titulo="#05 - Componente com Filhos" color="#87CEEB">
                    <Familia sobrenome="Flor">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Paulo" />
                        <FamiliaMembro nome="Carla" />
                    </Familia>
                </Card>


                <Card titulo="#04 - Desafio Aleatório" color="#C71585">
                    <Aleatorio min={0} max={80} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#DC143C">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#D8BFD8">
                    <ComParametro title='Situação do Aluno(a)' aluno='Osito' nota={10} />

                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#00FA9A">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
};