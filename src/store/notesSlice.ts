// src/store/notesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Note {
  id: number;
  content: string;
  category: string;
  archived: boolean;
}

const initialState: Note[] = [
    {
        id: 1,
        img: '',
        name: `Shoping List 1`,
        creationDate: '2021-11-20',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 2,
        img: '',
        name: 'Shoping List 2',
        creationDate: '2021-02-10',
        category: 'Task',
        content: 'Task Radency',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 3,
        img: '',
        name: 'Shoping List 3',
        creationDate: '2021-04-20',
        category: 'Idea',
        content: 'Tomatoes, bread, milk',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 4,
        img: '',
        name: 'Shoping List 4',
        creationDate: '2021-04-20',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 5,
        img: '',
        name: 'Shoping List 5',
        creationDate: '2018-12-10',
        category: 'Task',
        content: 'bread',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 6,
        img: '',
        name: 'Some random thought',
        creationDate: '2021-04-20',
        category: 'Random Thought',
        content: 'bread',
        dates: '3/5/2021',
        archived: false,
      },
      {
        id: 7,
        img: '',
        name: 'Some random thought',
        creationDate: '2021-04-20',
        category: 'Random Thought',
        content: 'Tomatoes, bread',
        dates: '3/5/2021',
        archived: false,
      },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const note = state.find((note) => note.id === action.payload);
      if (note) {
        note.archived = !note.archived;
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, archiveNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;

// Создание стора (хранилища) и связывание с компонентами будет показано ниже
