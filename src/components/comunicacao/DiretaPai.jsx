import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
           <DiretaFilho nome="Flor" idade={25} nerd={true} />
           <DiretaFilho nome="Juliana" idade={24} nerd={false} />
        </div>
    )
}