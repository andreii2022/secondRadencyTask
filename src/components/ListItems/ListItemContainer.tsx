import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";


export type prop = {
    typeList: string,
    notes: any[],
    imgCategories: {
        task: string,
        idea: string,
        "random thought": string
    }
    buttonCreate: {
        active: boolean,
        yesVal: string,
        noVal: string
    },
}

const ListItemsContainer = ({
    typeList,
    notes,
    imgCategories,
    buttonCreate,
}: prop) => {
    return (
        <>
            <ListItem
                typeList={typeList}
                notes={notes}
                imgCategories={imgCategories}
                buttonCreate={buttonCreate}
            />
        </>
    )
}

export default connect(
    (state: any) => ({
        notes: state.storageNotes,
        imgCategories: state.imgCatgSrc,
        buttonCreate: state.buttonCreate,
    }),
)(ListItemsContainer);



