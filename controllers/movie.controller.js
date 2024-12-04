import Movie from '../models/movie.model.js';
import mongoose from 'mongoose';

// Create a new movie
const createMovie = async (req, res) => {
  try {
    const { name, img, summary } = req.body;
    if ([name, img, summary].map( x => x.trim()).includes('')) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const movie = new Movie({ name, img, summary });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single movie by ID
const getMovieById = async (req, res) => {
  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Movie ID' });
    }
    const movie = await Movie.findById(id);

    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } catch (err) {
    console.log(err, 'err');
    res.status(500).json({ message: err.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, img, summary } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Movie ID' });
    }

    const movie = await Movie.findByIdAndUpdate(id, { name, img, summary }, {
      new: true,
    });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Movie ID' });
    }
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };