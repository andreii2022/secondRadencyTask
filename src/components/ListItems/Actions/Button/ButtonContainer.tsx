import React from "react";
import { connect } from "react-redux";
import { editItemList, removeItemList, archiveOrNotItemList, saveEditItem } from "../../../../redux/actions";
import Button from "./Button";


const ButtonContainer = (props: any) => {
    let clickFunction = null;

    switch (props.type) {
        case "edit":
            clickFunction = props.onEditItemList;
            break;
        case "tick":
            clickFunction = props.onSaveItemList;
            break;
        case "delete":
            clickFunction = props.onRemoveItemList;
            break;
        case "archive":
            clickFunction = props.onArchiveItemList;
            break;
        case "unarchive":
            clickFunction = props.onUnarchiveItemList;
            break;
        default:
            return null;
    }
    return (
        <Button
            editInputs={props.editInputs}
            type={props.type}
            click={clickFunction}
            idItem={props.idItem}
        />
    )
}

export default connect(
    (state: any) => ({
        editInputs: state.editInputs,
    }),
    dispatch => ({
        onEditItemList: (idItem: number) => dispatch(editItemList(idItem)),
        onSaveItemList: (id: number, editTitle: string, editSelector: string, editContent: string) => {
            dispatch(saveEditItem(id, editTitle, editSelector, editContent))
        },
        onArchiveItemList: (idItem: number) => dispatch(archiveOrNotItemList(idItem)),
        onRemoveItemList: (idItem: number) => dispatch(removeItemList(idItem)),
        onUnarchiveItemList: (idItem: number) => dispatch(archiveOrNotItemList(idItem)),
    })
)(ButtonContainer);






