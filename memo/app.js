
const notes = require("./notes");
const yargs = require('yargs');
const argv = yargs.argv;

const command = argv._[0];

const logNote = ({ title, body }) => {
  console.log("---------------------");
  console.log(`タイトル: ${title}`);
  console.log(`内容: ${body}`);
}

const addSuccess = (note) => {
  console.log("内容が保存されました");
  logNote(note)
}

const readSuccess = (note) => {
  console.log("見つかりました");
  logNote(note)
}


const addFail = () => {
  console.log("タイトルが重複しています");
}

const readFail = () => {
  console.log("データが見つかりませんでした");
}

if(command === "add"){
  const note = notes.addNote(argv.title, argv.body);
  note !== undefined ? addSuccess(note) : addFail()
}else if(command === "list"){
  const allNotes = notes.showAll();
  console.log(`表示数: ${allNotes.length}`)
  allNotes.forEach(note => logNote(note));

}else if(command === "read"){
  const note = notes.readNote(argv.title);
  note !== undefined ? readSuccess(note) : readFail()
}else if(command === "remove"){
  const hasRemoved = notes.removeNote(argv.title);
  const message = hasRemoved ? "削除されました" : "見つかりませんでした";
  console.log(message);
}