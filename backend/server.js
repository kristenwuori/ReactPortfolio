const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;
var cors = require('cors');

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));

