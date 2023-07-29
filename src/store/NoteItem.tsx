// src/components/NoteItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote, toggleArchive } from '../store/notesSlice';
import { Note } from '../store/notesSlice';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const dispatch = useDispatch();

  const handleEdit = (content: string) => {
    dispatch(editNote({ ...note, content }));
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleToggleArchive = () => {
    dispatch(toggleArchive(note.id));
  };

  return (
    <div>
      <p>{note.content}</p>
      <button onClick={() => handleEdit('Updated content')}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleArchive}>
        {note.archived ? 'Unarchive' : 'Archive'}
      </button>
    </div>
  );
};

export default NoteItem;

