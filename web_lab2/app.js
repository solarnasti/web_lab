const express = require("express");
const app = express();
const Function = require("./tasks 4");
const PORT = 3000
const fs = require('fs');
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(function(req, res, next) {
    console.log('URL запроса:', req.originalUrl);
    console.log('Метод запроса:', req.method);
    next();
})

app.get('/api/GoncharovaAnastasia/lab1/task1', function (req,res){
    res.render("task1.hbs",{
        title: "Функция декапитализации первой буквы строки",
        request: 'Введи строку, которую ты хочешь изменить'
        })
})

app.get('/api/GoncharovaAnastasia/lab1/task1/result', function(req,res){
    res.render("task_result.hbs",{
        final_title: "Получившийся результат:",
        result: Function.firstDecapital(req.query.text_of_task)
    })
})

app.get('/api/GoncharovaAnastasia/lab1/task2/authentication', adminMiddle, function(req,res){
    res.send('Ура! Теперь можно перейти по ссылке:<em>http://localhost:3000/api/GoncharovaAnastasia/lab1/task2</em>')
})

app.get('/api/GoncharovaAnastasia/lab1/task2', function (req,res){
    res.render("task2.hbs", {
        title: "Функция проверки на целое число",
        request: "Введи число, которое хочешь проверить"
    })
})

app.get('/api/GoncharovaAnastasia/lab1/task2/result', function(req,res){
    res.render("task_result.hbs",{
        final_title: "Получившийся результат",
        result: Function.IntegerOrNot(req.query.text_of_task)
    })
})

app.get('/api/GoncharovaAnastasia/lab1/task3/authentication', adminMiddle, function(req,res){
    res.send('Ура! Теперь можно перейти по ссылке:<em>http://localhost:3000/api/GoncharovaAnastasia/lab1/task3</em>')
})

app.get('/api/GoncharovaAnastasia/lab1/task3', function (req,res){
    res.render("task3.hbs", {
        title: "Функция, чтобы найти первый неповторяющийся символ в строке",
        request: "Введи строку для поиска"
    })
})

app.get('/api/GoncharovaAnastasia/lab1/task3/result', function(req,res){
    res.render("task_result.hbs",{
        final_title: "Получившийся результат",
        result: Function.findFirstNotRepeating(req.query.text_of_task)
    })
})

app.use('/', function(req,res){
    res.render("home.hbs")
})

app.use(errorMiddle)
app.listen(PORT);

////////////////////////MIDDLEWARE//////////////////////

function adminMiddle(req, res, next){
    if(req.query.admin === "true"){
        next()
    }
    else{
        res.status(404).send("Ты врунишка!")
    }
}

function errorMiddle(err, req, res, next){
    switch (err.name){
        case '403':
            res.status(403).send("Ошибка 403 Forbidden!")
            fs.appendFile('error403.txt','Доступ к конечной точке не разрешен.', (err))
            break;
        case '404':
            res.status(404).send("Ошибка 404 Not Found! ")
            fs.appendFile('error404.txt','Конечную точку невозможно обнаружить.', (err))
            break;
        case '500':
            res.status(500).send("Ошибка 500 Internal Server Error! ")
            fs.appendFile('error500.txt','Внутренняя ошибка сервера', (err))
            break;
        default:
            res.send('Что-то здесь не так...')
            break;
    }
}