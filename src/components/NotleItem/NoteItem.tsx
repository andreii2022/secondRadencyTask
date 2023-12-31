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
import React, { FC, useState } from "react";
import { Note, changeStatus, removeNote } from "../../redux/reducers/notesReducer";
import { categories } from "../../material/categories";
import { BsPencil, BsArchive, BsTrash, BsBoxArrowInUpRight, BsBoxArrowInDownLeft } from "react-icons/bs";
import ModalForm from "../ModalForm/ModalForm";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styles from "./NoteItem.module.css";

const NoteItem: FC<Note> = ({
  category,
  content,
  created,
  dates,
  id,
  isActive,
  name,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const noteCategory = categories.find((element) => element.id === category);

  const deleteItem = () => {
    dispatch(removeNote(id));
  };

  const archiveItem = (status: boolean) => {
    dispatch(changeStatus(id, status));
  };

  return (
    <tr>
      <td className={`${styles.nameItem} px-4 py-2 flex items-center`}>
        <img src={noteCategory?.icon} alt={noteCategory?.title} className="w-6 h-6 mr-2" />
        {name}
      </td>
      <td className="px-4 py-2">{created}</td>
      <td className="px-4 py-2">{noteCategory?.title}</td>
      <td className={`${styles.cutEdges} px-4 py-2`}>{content}</td>
      <td className={`${styles.cutEdges} px-4 py-2`}>{dates.join(", ")}</td>
      <td className="px-4 py-2">
        <div className="flex">
          <Button variant="light" onClick={() => setOpenModal(true)} className="mr-2">
            <BsPencil />
          </Button>
          <Button variant="light" onClick={() => archiveItem(!isActive)} className="mr-2">
            {isActive ? <BsArchive /> : <BsBoxArrowInDownLeft />}
          </Button>
          <Button variant="light" onClick={deleteItem} className="mr-2">
            <BsTrash />
          </Button>
        </div>
      </td>
      <ModalForm
        show={openModal}
        onHide={() => setOpenModal(false)}
        isCreate={false}
        initialData={{ category, content, created, dates, id, isActive, name }}
      />
    </tr>
  );
};

export default NoteItem;
