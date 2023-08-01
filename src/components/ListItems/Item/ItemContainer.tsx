import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addItemList, saveEditTitle, saveEditSelect, saveEditContent } from "../../../redux/actions";

export type Itemprops = {
        typeList: string,
        id: number,
        created: string,
        category: string,
        title: string,
        content: string,
        dates: any[],
        isEdit: boolean,
        isArchive: boolean,
        imgCategories: any,
        onSaveTitle: any,
        onSaveSelect: any,
        onSaveContent: any,  
    }
const ItemContainer = (props: Itemprops) => {
    return(
        <Item
        typeList={props.typeList}
        id={props.id}
        created={props.created}
        category={props.category}
        title={props.title}
        content={props.content}
        dates={props.dates}
        isEdit={props.isEdit}
        isArchive={props.isArchive}
        imgCategories={props.imgCategories}
        onSaveTitle={props.onSaveTitle}
        onSaveSelect={props.onSaveSelect}
        onSaveContent={props.onSaveContent}
        />
    )
}
export default connect(
    (state: any) => ({
        imgCategories: state.imgCatgSrc,
    }),
    dispatch => ({
        onAddItem: (title: string, select: string, content: string) =>
            dispatch(addItemList(title, select, content)),
        onSaveTitle: (value: number) => dispatch(saveEditTitle(value)),
        onSaveSelect: (value: number) => dispatch(saveEditSelect(value)),
        onSaveContent: (value: number) => dispatch(saveEditContent(value)),
    })
)(ItemContainer);









