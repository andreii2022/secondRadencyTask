
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  content: string;
  archived: boolean;
}

const initialState: Note[] = [];

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      addNote: (state, action: PayloadAction<Note>) => {
        state.push(action.payload);
      },
      editNote: (state, action: PayloadAction<Note>) => {
        const index = state.findIndex((note) => note.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
      deleteNote: (state, action: PayloadAction<number>) => {
        return state.filter((note) => note.id !== action.payload);
      },
      toggleArchive: (state, action: PayloadAction<number>) => {
        const index = state.findIndex((note) => note.id === action.payload);
        if (index !== -1) {
          state[index].archived = !state[index].archived;
        }
      },
    },
  });

export const { addNote, editNote, deleteNote, toggleArchive } = notesSlice.actions;
export default notesSlice.reducer;
