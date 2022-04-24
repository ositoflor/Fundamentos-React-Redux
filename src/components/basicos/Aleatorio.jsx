import React from "react";

export default props => {
    const { min, max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min) + min );
    
    return( 
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong> Valor Mínimo: </strong> {min}
            </p>
            <p>
                <strong> Valor Máximo: </strong> {max}
            </p>
            <p>
                <strong> Valor Aleatório: </strong> {aleatorio}
            </p>
        </div>
    )
}