
import React from "react";
import Actions from "../Actions/Actions";
import CategoryImg from "../CategoryImg/CategoryImg";
import { Itemprops } from "./ItemContainer";

const Item = ({
    typeList,
    id,
    created,
    category,
    title,
    content,
    dates,
    isEdit,
    isArchive,
    imgCategories,
    onSaveTitle,
    onSaveSelect,
    onSaveContent
}: Itemprops) => {

    return (
        <li className="item" key={id + "item"}>
            <CategoryImg src={"/icons/" + imgCategories[category]} />
            {isEdit
                ? <input onChange={(e) => onSaveTitle(e.target.value)} defaultValue={title} type="text" />
                : <p>{title}</p>}
            <p>{created}</p>
            {isEdit
                ? <select
                    defaultValue={category}
                    onChange={(e) => onSaveSelect(e.target.value)}
                    name="category">
                    {Object.keys(imgCategories).map((el, id) =>
                        <option key={id + "option"} value={el}>{el}</option>)
                    }
                </select>
                : <p>{category}</p>}
            {isEdit
                ? <textarea
                    onChange={(e) => onSaveContent(e.target.value)}
                    defaultValue={content}
                    name="content"
                    cols={30}
                    rows={5}
                >
                </textarea>
                : <p>{content}</p>}
            <p>{dates.length > 0 && dates.join(', ').replace(/\./g, "/")}</p>
                 <Actions
                    typeList={typeList}
                    idItem={id}
                    isEdit={isEdit}
                    isArchive={isArchive}

                />
        </li>
    )
}
export default Item;