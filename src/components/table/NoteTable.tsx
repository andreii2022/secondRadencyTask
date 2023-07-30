// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store'; // Импортируйте тип RootState

// const NoteTable: React.FC = () => {
//   const notes = useSelector((state: RootState) => state.notes.notes);


//   return (
//     <table className="main-table">
//       <thead>
//         <tr className="header-list">
//           <td className="note-info">Name</td>
//           <td className="note-date-created">Created</td>
//           <td className="note-category">Category</td>
//           <td className="note-text">Content</td>
//           <td className="note-dates-aditional">Dates</td>
//           <td>
//             <div className="note-header-icons">
//               <i className="fas fa-archive"></i>
//               <i className="fas fa-trash"></i>
//             </div>
//           </td>
//         </tr>
//       </thead>
//       <tbody className="main-table-body">
//         {notes.map((note) => (
//           <tr key={note.id}>
//             <td>{note.name}</td>
//             <td>{note.dateCreated}</td>
//             <td>{note.category}</td>
//             <td>{note.content}</td>
//             <td>{note.dates.join(', ')}</td>
//             <td>
//               <div className="note-item">
//                 <button>Edit</button>
//                 <button>Archive</button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default NoteTable;
// NoteTable.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const NoteTable: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <table className="main-table">
      <thead>
        <tr className="header-list">
          <td className="note-info">Name</td>
          <td className="note-date-created">Created</td>
          <td className="note-category">Category</td>
          <td className="note-text">Content</td>
          <td className="note-dates-aditional">Dates</td>
          <td>
            <div className="note-header-icons">
              <i className="fas fa-archive"></i>
              <i className="fas fa-trash"></i>
            </div>
          </td>
        </tr>
      </thead>
      <tbody className="main-table-body">
        {notes.map((note) => (
          <tr key={note.id}>
            <td>{note.name}</td> // Убедитесь, что свойство name правильно указано
            <td>{note.dateCreated}</td> // Убедитесь, что свойство dateCreated правильно указано
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NoteTable;
