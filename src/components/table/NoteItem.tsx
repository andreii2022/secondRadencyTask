
import React from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote, toggleArchive } from '../../components/table/notesSlice';

export interface NoteItemProps {
  note: {
    id: number;
    content: string;
    category: string;
    dates: string[];
    archived: boolean;
  };
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const dispatch = useDispatch();

  const handleEdit = (content: string) => {
    dispatch(
      editNote({
        ...note,
        name: 'Note Name', // Убедитесь, что свойство name задано
        dateCreated: '2023-07-29', // Убедитесь, что свойство dateCreated задано
        content,
        dates: [], // Пока нет функциональности для упоминания дат
        archived: false,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleToggleArchive = () => {
    dispatch(toggleArchive(note.id));
  };

  return (
    <tr>
      <td>{new Date(note.id).toLocaleString()}</td>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.dates.join(', ')}</td>
      <td>
        <button onClick={() => handleEdit('Updated content')}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggleArchive}>
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
      </td>
    </tr>
  );
};

export default NoteItem;
