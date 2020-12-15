const express = require('express');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));

app.use('/api/ingredients', require('./routes/api/ingredients'));
app.use('/api/recipes', require('./routes/api/recipes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
