const express = require("express");
const app = express();
const hbs = require("hbs");

const PORT = 3000;

app.set("view engine", "hbs");

// ミドルウェア(middleware)
// 静的ファイルの読み込み
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get('/about', (req, res) => {
  res.render("about.hbs");
  // viewsディレクトリにある場合に限り直接参照することができる
});

app.listen(PORT);