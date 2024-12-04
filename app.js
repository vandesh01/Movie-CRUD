// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const movieRoutes = require('./routes/movie.routes');
import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movie.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRoutes); // Movie routes

export default app;
