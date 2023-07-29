
import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../store/notesSlice';
import NoteItem from '../store/NoteItem';
import Table from './Table';

const NoteList: React.FC = () => {
  const notes = useSelector((state: { notes: Note[] }) => state.notes);
  const tableHeaders = ['ID', 'Content', 'Archived'];
  const tableData = notes.map((note) => [
    note.id,
    note.content,
    note.archived ? 'Yes' : 'No',
  ]);

  return (
    <div>
      <h2>List of Notes</h2>
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );

  // ... остальной код компонента ...
};
 export default NoteList;