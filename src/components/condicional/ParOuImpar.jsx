import React from "react";

export default props => {

    const isPar = props.numero % 2 === 0;

    return (
        <div>
            {isPar ? <span>{props.numero} é par</span> : <span>{props.numero} é impar</span>}
        </div>
    )
}