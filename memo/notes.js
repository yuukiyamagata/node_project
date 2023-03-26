console.log("notes.js稼働");

const fs = require('fs');

const fetchNotes  = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json")
    // ファイルの読み込み。戻り値はJSON型
    return JSON.parse(notesString);
  }catch(e){
    return [];
  }
}

const saveNotes = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  // ファイルへの書き込み

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = { title, body };
  const isDuplicated = notes.some(note => note.title === title)
  if(!isDuplicated){
    notes.push(note);
    saveNotes(notes)
    return note;
  }
};

const showAll = () => fetchNotes();

const readNote = title => {
  const notes = fetchNotes();
  return notes.find(note => note.title === title);
};

const removeNote = title => {
  const notes = fetchNotes();
  const index = notes.findIndex(note => note.title === title);
  notes.splice(index, 1);
  saveNotes(notes)

  return index > -1;

  // 別解
  // const filteredNotes = notes.filter(note => note.title !== title);
  // saveNotes(filteredNotes);
};

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote
}