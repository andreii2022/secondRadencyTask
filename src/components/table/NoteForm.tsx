// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNote } from './notesSlice';

// const NoteForm: React.FC = () => {
//   const [content, setContent] = useState('');

//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (content.trim() !== '') {
//       dispatch(
//         addNote({
//           id: Date.now(),
//           name: 'Note Name',
//           dateCreated: new Date().toISOString(),
//           category: 'Task',
//           content: content,
//           dates: [],
//           archived: false, // Добавляем свойство archived
//         })
//       );
//       setContent('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
//       <button type="submit">Add Note</button>
//     </form>
//   );
// };

// export default NoteForm;

// src/components/NoteForm/NoteForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../components/table/notesSlice';

const NoteForm: React.FC = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() !== '' && category.trim() !== '') {
      dispatch(
        addNote({
          id: Date.now(),
          name: 'Note Name', // Убедитесь, что свойство name задано
          dateCreated: new Date().toISOString(), // Убедитесь, что свойство dateCreated задано
          category: category,
          content: content,
          dates: [], // Пока нет функциональности для упоминания дат
          archived: false,
        })
      );
      setContent('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
