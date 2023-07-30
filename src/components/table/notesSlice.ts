// // notesSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface Note {
//   id: number;
//   name: string;
//   dateCreated: string;
//   category: string;
//   content: string;
//   dates: string[];
//   archived: boolean;
// }

// interface NoteState {
//   notes: Note[];
// }

// const initialState: NoteState = {
//   notes: [],
// };

// const notesSlice = createSlice({
//   name: 'notes',
//   initialState,
//   reducers: {
//     addNote: (state, action: PayloadAction<Note>) => {
//       state.notes.push(action.payload);
//     },
//     editNote: (state, action: PayloadAction<Note>) => {
//       const { id, name, category, content } = action.payload;
//       const noteToUpdate = state.notes.find((note) => note.id === id);
//       if (noteToUpdate) {
//         noteToUpdate.name = name;
//         noteToUpdate.category = category;
//         noteToUpdate.content = content;
//       }
//     },
//     deleteNote: (state, action: PayloadAction<number>) => {
//       state.notes = state.notes.filter((note) => note.id !== action.payload);
//     },
//     toggleArchive: (state, action: PayloadAction<number>) => {
//       const noteToToggle = state.notes.find((note) => note.id === action.payload);
//       if (noteToToggle) {
//         noteToToggle.archived = !noteToToggle.archived;
//       }
//     },
//   },
// });

// export const { addNote, editNote, deleteNote, toggleArchive } = notesSlice.actions;
// export default notesSlice.reducer;

// src/store/notesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  name: string; // Убедитесь, что свойство name определено в интерфейсе Note
  dateCreated: string; // Убедитесь, что свойство dateCreated определено в интерфейсе Note
  category: string;
  content: string;
  dates: string[];
  archived: boolean;
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, content, category, dates } = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === id);
      if (noteToUpdate) {
        noteToUpdate.content = content;
        noteToUpdate.category = category;
        noteToUpdate.dates = dates;
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    toggleArchive: (state, action: PayloadAction<number>) => {
      const noteToToggle = state.notes.find((note) => note.id === action.payload);
      if (noteToToggle) {
        noteToToggle.archived = !noteToToggle.archived;
      }
    },
  },
});

export const { addNote, editNote, deleteNote, toggleArchive } = notesSlice.actions;
export default notesSlice.reducer;
