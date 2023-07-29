import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import notesReducer from '../path/to/your/notesReducer'; // Путь к вашему редьюсеру

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notesReducer', () => {
  it('should handle FETCH_NOTES_SUCCESS action', () => {
    const initialState = {
      notes: [],
      loading: false,
      error: null,
    };

    const notes = [
      { id: 1, content: 'Note 1' },
      { id: 2, content: 'Note 2' },
    ];
    const action = { type: 'FETCH_NOTES_SUCCESS', payload: notes };

    const newState = notesReducer(initialState, action);

    expect(newState).toEqual({
      notes,
      loading: false,
      error: null,
    });
  });

  it('should handle UPDATE_NOTE_SUCCESS action', () => {
    const initialState = {
      notes: [
        { id: 1, content: 'Note 1' },
        { id: 2, content: 'Note 2' },
      ],
      loading: false,
      error: null,
    };

    const updatedNote = { id: 2, content: 'Updated Note 2' };
    const action = { type: 'UPDATE_NOTE_SUCCESS', payload: updatedNote };

    const newState = notesReducer(initialState, action);

    expect(newState).toEqual({
      notes: [{ id: 1, content: 'Note 1' }, updatedNote],
      loading: false,
      error: null,
    });
  });

  // Добавьте другие тесты для других случаев обработки экшенов, если есть
});
