import './Input.css';
import React, { useState } from "react";

export default props => {
    const [valor, setValor ] = useState('Inicial');

    const quandoMudar = (e) => {
        setValor(e.target.value);
    }
    return (
        <div className="Input">
            <h2><strong>{valor}</strong></h2>
            <div className='Inputs'>
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined}/>

            </div>
        </div>
    )
}