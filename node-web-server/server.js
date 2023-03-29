const express = require("express");
const app = express();
const hbs = require("hbs");
const fs = require("fs");

const PORT = 3000;

app.set("view engine", "hbs");

// ミドルウェア(middleware)
app.use(express.static(__dirname + "/public")); // 静的ファイルの読み込み
app.use((req, res, next) => {
  const now = new Date();
  const log = `リクエスト発生時刻: ${now}: ${req.method}, ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + "\n", (err) => {
    err && console.log(err);
  });
  next();
});

hbs.registerPartials(__dirname + "/views/partials");
// partialsの利用
hbs.registerHelper("getCurrentYear", () => {
  // return new Date().getFullYear();
  return "something";
});

hbs.registerHelper("uppercase", text => text.toUpperCase());
// helper関数の作成

app.get('/', (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    content: "当ホームページへようこそ!",
  });
});

app.get('/about', (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    content: "コンテンツです",
  });
  // viewsディレクトリにある場合に限り直接参照することができる
});

app.listen(PORT);