export type State = {
    notes: SubmitNote[],
    tableData: {[key: string]: {active: number, archived: number}}[],
    modal: ModalData,
    showArchived: boolean
}

export type ModalData = {
    text: string,
    category: string,
    isOpen: boolean, 
    id: string,
}

export type Id = number | string;

export type SubmitNote = {
    text: string;
    category: string;
    archived: boolean;
    time: string;
    id: string;
}

export type SubmitEdit = {
    text: string;
    category: string;
    id: Id;
}