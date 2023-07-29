// src/App.tsx
import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Notes App</h1>
        <NoteForm />
        <hr />
        <NoteList />
      </div>
    </Provider>
  );
};

export default App;

