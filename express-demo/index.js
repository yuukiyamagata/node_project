const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Joi = require("joi");

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const courses = [
  {id: 1, name: "courses1"},
  {id: 2, name: "courses2"},
  {id: 3, name: "courses3"},
];

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.post('/courses', (req, res) => {
  const schema= Joi.object({
    name: Joi.string().min(3).required()
  });
  let result = schema.validate(req.body);
  console.log(result);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(courses);
})

app.get('/courses/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if(!course){
    res.send("該当IDのコースが見つかりません")
  }
  res.send(course);
})

app.get('/posts/:year/:month', (req, res) => {
  // res.send(`${req.params.year}年${req.params.month}年の記事です`);
  res.send(req.query)
})
app.listen(PORT, () => {
  console.log(`ポート番号: ${PORT}で立ち上がりました`);
});

