// import React, { FC } from "react";
// import Table from "../../components/Table/Table";
// import { mainTableHead } from "../../material/tableHeaders";
// import { useSelector } from "react-redux";
// import { Note, getArchiveNotes } from "../../redux/reducers/notesReducer";
// import NoteItem from "../../components/NotleItem/NoteItem";

// const ArchivePage: FC = () => {
//   const noteList = useSelector(getArchiveNotes);
//   return (
//     <Table headers={mainTableHead}>
//       {noteList.map((item: Note, index: number) => (
//         <NoteItem key={index} {...item} />
//       ))}
//     </Table>
//   );
// };

// export default ArchivePage;
import React, { FC } from "react";
import Table from "../../components/Table/Table";
import { useSelector } from "react-redux";
import { getArchiveNotes } from "../../redux/reducers/notesReducer";
import NoteItem from "../../components/NotleItem/NoteItem";
import { mainTableHead } from "../../material/tableHeaders";

const ArchivePage: FC = () => {
  const noteList = useSelector(getArchiveNotes);
  
  return (
    <Table headers={mainTableHead}>
      {noteList.map((item, index) => (
        <NoteItem key={index} {...item} />
      ))}
    </Table>
  );
};

export default ArchivePage;
