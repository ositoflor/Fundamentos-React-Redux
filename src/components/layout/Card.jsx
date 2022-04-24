import "./Card.css";
import React from "react";

export default props => {
    const style = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={style}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    );
};