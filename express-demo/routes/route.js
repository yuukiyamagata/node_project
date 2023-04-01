const express = require("express");
const router = express.Router();// 外部ファイルにおいてのみ有効な方法
const Joi = require("joi");



const courses = [
  {id: 1, name: "courses1"},
  {id: 2, name: "courses2"},
  {id: 3, name: "courses3"},
];


const validate = (course) => {
  const schema= Joi.object({
    name: Joi.string().min(3).required()
  });
  return schema.validate(course);
}


router.get('/', (req, res) => {
  res.send(courses);
});

router.post('/', (req, res) => {
  const { error } = validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };



  courses.push(course);
  res.send(courses);
})

router.get('/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if(!course){
    res.send("該当IDのコースが見つかりません")
  }
  res.send(course);
})

router.get('/posts/:year/:month', (req, res) => {
  // res.send(`${req.params.year}年${req.params.month}年の記事です`);
  res.send(req.query)
})


router.put('/:id', (req, res) => {
  const course = courses.find(course =>  course.id === parseInt(req.params.id));
  if(!course) res.send("該当のIdが見つかりません");

  const { error } = validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }

    const updateCourses = courses.map(course => {
      if(course.id === parseInt(req.params.id)){
        return { ...course, name: req.body.name };
      }
      return course;
    });

    res.send(updateCourses);
});

router.delete('/:id', (req, res) => {
  const index = courses.findIndex(course => course.id === parseInt(req.params.id));
  if(index === -1) res.send("該当のidが見つかりません");
  courses.splice(index, 1);

  res.send(courses);
})


module.exports = router;