const express = require('express');
const app = express();
const PORT = 5000;
const initDatabase = require('./sequelize/db');

//initDatabase();

app.use('/api/ingredients', require('./routes/ingredients'));
app.use('/api/recipes', require('./routes/recipes'));

app.listen(PORT, () => {
    console.log("Server started on port", PORT)
});