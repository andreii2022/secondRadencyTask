// src/components/NoteForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/notesSlice';

const NoteForm: React.FC = () => {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() !== '') {
      dispatch(addNote({ id: Date.now(), content, archived: false }));
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
