// import React from 'react';
// import { useSelector } from 'react-redux';
// import NoteItem from './NoteItem';
// import { Note } from './notesSlice';

// const NoteList: React.FC = () => {
//   const notes = useSelector((state: { notes: Note[] }) => state.notes);

//   return (
//     <div>
//       <h2>List of Notes</h2>
//       <table className="main-table">
//         <thead>
//           <tr className="header-list">
//             <td className="note-info">Name</td>
//             <td className="note-date-created">Created</td>
//             <td className="note-category">Category</td>
//             <td className="note-text">Content</td>
//             <td className="note-dates-aditional">Dates</td>
//             <td>
//               <div className="note-header-icons">
//                 <i className="fas fa-archive"></i>
//                 <i className="fas fa-trash"></i>
//               </div>
//             </td>
//           </tr>
//         </thead>
//         <tbody className="main-table-body">
//           {notes.map((note) => (
//             <NoteItem key={note.id} note={note} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NoteList;

// src/components/NoteList/NoteList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../components/store/store';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div>
      <h2>List of Notes</h2>
      <table>
        <thead>
          <tr>
            <th>Time Created</th>
            <th>Content</th>
            <th>Category</th>
            <th>Dates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
