import React from "react";


type ButtonProp = {
    type: string,
     click: any, 
     idItem: number, 
     editInputs: any,
}
const Button = ({ type, click, idItem, editInputs }: ButtonProp) => {
    return (
        <div>
            <img
                
                onClick={() => type === 'tick' ? click(idItem, editInputs.editTitle, editInputs.editSelector, editInputs.editContent) : click(idItem)}
                className="icon"
                src={`/icons/${type}.png`}
                alt="icon" />
        </div>
    )
}

export default Button;



