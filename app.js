const express = require("express");
const app = express();
const Function = require("./tasks 4");
const PORT = 3000

app.get ('/', (reg, res)=>{
    res.send("<h1>Привет! Сейчас я вас познакомлю с моей первой лабой ;) </h1><p> <h2>Выбери задание и перейди по ссылке</h2> <p> " +
        "<h3>1.Функция декапитализации первой буквы строки:</h3> <em>http://localhost:3000/api/GoncharovaAnastasia/lab1/task1?Decapital= <p> </em>" +
        "<h3>2. Функция проверки на целое число: </h3><em>http://localhost:3000/api/GoncharovaAnastasia/lab1/task2?Integer=</em><p>" +
        "<h3>3. Функция, чтобы найти первый неповторяющийся символ в строке:</h3> <em>http://localhost:3000/api/GoncharovaAnastasia/lab1/task3?Find= </em>")
    })

app.get('/api/GoncharovaAnastasia/lab1/task1',function (req,res){
res.send('<h2>Функция декапитализации первой буквы строки <p></h2> <h3>Результат: </h3>' + Function.firstDecapital(req.query.Decapital))
})

app.get('/api/GoncharovaAnastasia/lab1/task2',function (req,res){
res.send('<h2>Функция проверки на целое число <p> </h2><h3>Результат:</h3> '+ Function.IntegerOrNot(req.query.Integer))
})

app.get('/api/GoncharovaAnastasia/lab1/task3',function (req,res){
res.send('<h2>Функция, чтобы найти первый неповторяющийся символ в строке <p> <h2> <h3>Результат: </h3>'+Function.findFirstNotRepeating(req.query.Find))
})

app.listen(PORT);