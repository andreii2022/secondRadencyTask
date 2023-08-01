import React from "react";
import CategoryImg from "./CategoryImg/CategoryImg";
import AddingFormContainer from "./AddingForm/AddingFormContainer";
import ButtonCreateContainer from "./ButtonCreate/ButtonCreateContainer";
import ItemContainer from "./Item/ItemContainer";
import { prop } from "./ListItemContainer";


const ListItem = ({
    typeList,
    notes,
    imgCategories,
    buttonCreate,

}: prop) => {
    return (
        <>
            {typeList === 'category'
                &&
                <ul className="main">

                    {Object.entries(imgCategories).map((catg, id) =>
                        <li className="item" key={id + "category"}>
                            <CategoryImg src={"/icons/" + catg[1]} />
                            <p>{catg[0]}</p>
                            <p></p>
                            <p>
                                {notes
                                    .filter(el => el.category === catg[0])
                                    .filter(el => el.isArchived === false).length}
                            </p>
                            <p>
                                {notes
                                    .filter(el => el.category === catg[0])
                                    .filter(el => el.isArchived).length}
                            </p>
                        </li>
                    )
                    }
                </ul>
            }
            {typeList === 'list' &&
                <ul className="main">
                    {notes.map((el, id) => el.isArchived === false &&
                        <ItemContainer
                            typeList='list'
                            key={el.id + "item"}
                            id={el.id}
                            created={el.created}
                            category={el.category}
                            title={el.title}
                            content={el.content}
                            dates={el.dates}
                            isEdit={el.isEdit}
                            isArchive={el.isArchived}
                        />
                    )
                    }
                    {buttonCreate.active && typeList === 'list' && <AddingFormContainer />}
                    {typeList === "list" && <ButtonCreateContainer />}
                </ul>
            }

            {typeList === 'archive' &&
                <ul className="main">
                    {
                        notes.filter(el => el.isArchived).map((el, id) =>
                            <ItemContainer
                                typeList='archive'
                                key={el.id + "item"}
                                id={el.id}
                                created={el.created}
                                category={el.category}
                                title={el.title}
                                content={el.content}
                                dates={el.dates}
                                isEdit={el.isEdit}
                                isArchive={el.isArchived}
                            />
                        )
                    }
                </ul>
            }
        </>
    );
}

export default ListItem;











