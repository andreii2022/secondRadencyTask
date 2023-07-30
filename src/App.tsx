// import React from 'react';
// import NoteForm from './components/table/NoteForm';
// import NoteTable from './components/table/NoteTable';
// import { Provider } from 'react-redux';
// import store from './components/store/store';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div className="container">
//         <h1>Notes App</h1>
//         <NoteForm />
//         <hr />
//         <NoteTable />
//       </div>
//     </Provider>
//   );
// };

// export default App;


// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import NoteForm from './components/table/NoteForm';
import NoteList from './components/table/NoteList';
import store from './components/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Notes App</h1>
        <NoteForm />
        <hr />
        <NoteList />
      </div>
    </Provider>
  );
};

export default App;
