import React from "react";
import ButtonContainer from "./Button/ButtonContainer";

export type Buttonprops = {
    idItem: number,
    isEdit: boolean,
    typeList: string,
    isArchive: boolean,
}
const Actions = ({ idItem, isEdit, typeList, isArchive }: Buttonprops) => {
    return (
        <div className="icon-btn-wrapper">
            {typeList === 'archive'
                ? <ButtonContainer type='unarchive' idItem={idItem} />
                : <>
                    <ButtonContainer type={isEdit ? "tick" : "edit"} idItem={idItem} />
                    <ButtonContainer type='archive' idItem={idItem} />
                    <ButtonContainer type='delete' idItem={idItem} />
                </>
            }
        </div>
    )
}

export default Actions;








