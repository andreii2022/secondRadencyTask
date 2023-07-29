import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { images } from './path/to/your/images'; // Путь к массиву images из предыдущих ответов

const ImageComponent = ({ imgName, imgUrl }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: imgUrl }} />
      <p>{imgName}</p>
    </div>
  );
};

const NoteList = () => {
  // Получение заметок из хранилища Redux (предполагается, что у вас есть rootReducer с полем notes)
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <ImageComponent imgName={images[note.imgIndex].imgName} imgUrl={images[note.imgIndex].imgUrl} />
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
