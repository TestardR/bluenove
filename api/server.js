const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/debates', require('./routes/debates'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));