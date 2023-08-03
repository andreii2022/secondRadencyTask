// import React, { FC, useState } from "react";
// import {
//   Note,
//   changeStatus,
//   removeNote,
// } from "../../redux/reducers/notesReducer";
// import { categories } from "../../material/categories";
// import archiveIcon from "../../material/img/icons/archiveIcon.svg";
// import deleteIcon from "../../material/img/icons/deleteIcon.svg";
// import editIcon from "../../material/img/icons/editIcon.svg";
// import unarchiveIcon from "../../material/img/icons/unarchiveIcon.svg";
// import styles from "./NoteItem.module.css";
// import { Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import ModalForm from "../ModalForm/ModalForm";


// const NoteItem: FC<Note> = ({
//   category,
//   content,
//   created,
//   dates,
//   id,
//   isActive,
//   name,
// }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const dispatch = useDispatch();

//   const noteCategory = categories.find((element) => element.id == category);

//   const deleteItem = () => {
//     dispatch(removeNote(id));
//   };

//   const archiveItem = (status: boolean) => {
//     dispatch(changeStatus(id, status));
//   };

//   return (
//     <tr>
//       <td className={styles.nameItem}>
//         <img src={noteCategory?.icon} alt={noteCategory?.title} />
//         {name}
//       </td>
//       <td>{created}</td>
//       <td>{noteCategory?.title}</td>
//       <td className={styles.cutEdges}>{content}</td>
//       <td style={{minWidth:"250px"}} className={styles.cutEdges}>{dates.join(", ")}</td>
//       <td>
//         <Button variant="ligth" onClick={() => setOpenModal(true)}>
//           <img src={editIcon} alt="editIcon" />
//         </Button>
//         <Button variant="ligth" onClick={() => archiveItem(!isActive)}>
//           <img src={isActive ? archiveIcon : unarchiveIcon} alt="statusIcon" />
//         </Button>
//         <Button variant="ligth" onClick={deleteItem}>
//           <img src={deleteIcon} alt="deleteIcon" />
//         </Button>
//       </td>
//       <ModalForm
//         show={openModal}
//         onHide={() => setOpenModal(false)}
//         isCreate={false}
//         initialData={{ category, content, created, dates, id, isActive, name }}
//       />
//     </tr>
//   );
// };

// export default NoteItem;
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Note } from "../../redux/reducers/notesReducer";
import { changeStatus, removeNote } from "../../redux/reducers/notesReducer";
import { BsArchive, BsTrash } from "react-icons/bs";

interface NoteItemProps extends Note {}

const NoteItem: FC<NoteItemProps> = ({
  id,
  name,
  created,
  category,
  content,
  dates,
  isActive,
}) => {
  const dispatch = useDispatch();

  const handleArchive = () => {
    dispatch(changeStatus(id, !isActive));
  };

  const handleDelete = () => {
    dispatch(removeNote(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{created}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{dates.join(", ")}</td>
      <td>
        <button onClick={handleArchive}>
          <BsArchive />
        </button>
        <button onClick={handleDelete}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default NoteItem;
