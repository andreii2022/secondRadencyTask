import { myStore } from "./reducers";


export const addItemList = (inputName: string, selectCategory: string, inputContent: string) => {
    const currentDate = Date().split(' ').splice(0, 4);
    return {
        type: "ADD-ITEM",
        payload: {
            id: myStore.getState().storageNotes.length + 1,
            isEdit: false,
            isArchived: false,
            title: inputName,
            created: `${currentDate[1]} ${currentDate[2]}, ${currentDate[3]}`,
            category: selectCategory,
            content: inputContent,
            dates: inputContent.match(/\d{1,2}\.\d{1,2}\.\d{4}/g)
                ? inputContent.match(/\d{1,2}\.\d{1,2}\.\d{4}/g)
                : [],
        }
    }
}
