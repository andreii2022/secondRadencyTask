


export const store = {
    storageNotes: [
        { id: 1, isEdit: false, isArchived: false, title: 'Shopping list', created: 'April 20, 2022', category: 'task', content: 'tomateos, bread', dates: [], },
        { id: 2, isEdit: false, isArchived: false, title: 'lie teory of evolut...', created: 'April 27, 2022', category: 'random thought', content: 'study node', dates: [], },
        { id: 3, isEdit: false, isArchived: false, title: 'New Feature', created: 'May 05, 2022', category: 'idea', content: 'start task', dates: [], },
        { id: 4, isEdit: false, isArchived: false, title: 'William Gaddis', created: 'May 07, 2022', category: 'idea', content: 'study', dates: [], },
        { id: 5, isEdit: false, isArchived: false, title: 'Books', created: 'May 07, 2021', category: 'task', content: 'react radency', dates: ['05/03/2022'], },
        { id: 6, isEdit: false, isArchived: false, title: 'Shopping list', created: 'May 15, 2022', category: 'task', content: 'bread', dates: [], },
        { id: 7, isEdit: false, isArchived: false, title: 'Independace Day', created: 'Aug 24, 2022', category: 'task', content: 'sport', dates: [], },
        {
            id: 1,
            isEdit: false,
            isArchived: false,
            title: 'Shopping list',
            created: 'April 20, 2022',
            category: 'task',
            content: 'tomateos, bread',
            dates: ['3/5/2021', '5/5/2021'],
          },
    ], 

    archivedNotes: [], // Пустой массив для архивированных заметок
    activeNotes: [], // Пустой массив для активных заметок

     // Функция для архивации заметки
  archiveNote: function (noteId) {
    const noteToArchive = this.storageNotes.find((note) => note.id === noteId);
    if (noteToArchive) {
      noteToArchive.isArchived = true;
      this.archivedNotes.push(noteToArchive);
      this.activeNotes = this.activeNotes.filter((note) => note.id !== noteId);
    }
  },

  // Функция для разархивации заметки
  unarchiveNote: function (noteId) {
    const noteToUnarchive = this.archivedNotes.find((note) => note.id === noteId);
    if (noteToUnarchive) {
      noteToUnarchive.isArchived = false;
      this.activeNotes.push(noteToUnarchive);
      this.archivedNotes = this.archivedNotes.filter((note) => note.id !== noteId);
    }
  },

  // Функция для подсчета количества заметок по категориям
  getSummaryInfo: function () {
    const activeSummary = this.activeNotes.reduce((summary, note) => {
      summary[note.category] = (summary[note.category] || 0) + 1;
      return summary;
    }, {});

    const archivedSummary = this.archivedNotes.reduce((summary, note) => {
      summary[note.category] = (summary[note.category] || 0) + 1;
      return summary;
    }, {});

    return { active: activeSummary, archived: archivedSummary };
  },
};
  




    imgCatgSrc: {
        task: 'task-catg.png',
        idea: 'idea-catg.png',
        "random thought": 'random-catg.png',
    },
    buttonCreate: {
        active: false,
        yesVal: 'Create Note',
        noVal: 'Don\'t Create'
    },
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    inputs: {
        title: '',
        category: '',
        content: '',
    },
    editInputs: {
        editTitle: '',
        editSelector: '',
        editContent: '',

    },
    addingButtonState: false,
}

