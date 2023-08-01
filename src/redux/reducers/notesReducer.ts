import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Note {
  id: number;
  name: string;
  created: string;
  category: number;
  content: string;
  dates: Array<string>;
  isActive: boolean;
}

interface NotesState {
  noteList: Array<Note>;
}

interface ChangeStatusPayload {
  id: number;
  status: boolean;
}

interface EditData extends Partial<Omit<Note, "created" | "isActive">> {}

const initialState: NotesState = {
  noteList: [
    {
      id: 0,
      name: "sport",
      created: "25/08/2023",
      category: 0,
      content: "SROENARY HAPE HALT",
      dates: [],
      isActive: true,
    },
    {
      id: 1,
      name: "Grocery List",
      created: "21/05/2021",
      category: 0,
      content: "bread",
      dates: [],
      isActive: true,
    },
    {
      id: 2,
      name: "walk",
      created: "25/07/2021",
      category: 2,
      content: "Read",
      dates: [],
      isActive: true,
    },
    {
      id: 3,
      name: "Gift Ideas",
      created: "25/07/2023",
      category: 2,
      content: "birthday.",
      dates: [],
      isActive: true,
    },
    {
      id: 4,
      name: "surfing",
      created: "25/07/2023",
      category: 1,
      content: "Finish (10/08/2025)",
      dates: ["10/08/2023"],
      isActive: true,
    },
    {
      id: 5,
      name: "Travel",
      created: "25/07/2023",
      category: 1,
      content:
        "new york",
      dates: ["10/08/2023", "26/07/2023"],
      isActive: true,
    },
    {
      id: 6,
      name: "Fitness",
      created: "25/07/2023",
      category: 0,
      content: "learn",
      dates: [],
      isActive: true,
    },
  ],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.noteList = [action.payload, ...state.noteList];
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.noteList = state.noteList.filter(
        (note) => note.id !== action.payload
      );
    },
    editNote: (state, action: PayloadAction<EditData>) => {
      state.noteList = state.noteList.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, ...action.payload };
        } else {
          return el;
        }
      });
    },
    changeStatus: {
      reducer: (state, action: PayloadAction<ChangeStatusPayload>) => {
        const { id, status } = action.payload;
        const currentNote = state.noteList.find((el) => el.id === id);
        if (currentNote) {
          currentNote.isActive = status;
        }
      },
      prepare: (id: number, status: boolean) => ({ payload: { id, status } }),
    },
  },
});

export const { addNote, removeNote, editNote, changeStatus } =
  noteSlice.actions;

export const getNotesList = (state: RootState) => state.noteList.noteList;
export const getActiveNotes = (state: RootState) =>
  state.noteList.noteList.filter((item) => item.isActive);
export const getArchiveNotes = (state: RootState) =>
  state.noteList.noteList.filter((item) => !item.isActive);

export default noteSlice.reducer;
