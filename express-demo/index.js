const express = require("express");
const routes = require("./routes/route")
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/courses', routes);



app.get('/', (req, res) => {
  res.send("Hello World");
})


app.listen(PORT, () => {
  console.log(`ポート番号: ${PORT}で立ち上がりました`);
});

