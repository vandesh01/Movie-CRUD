import { Router } from 'express';
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from '../controllers/movie.controller.js';

const router = Router();

router.post('/', createMovie); // Create a new movie
router.get('/', getAllMovies); // Get all movies
router.get('/:id', getMovieById); // Get a single movie
router.put('/:id', updateMovie); // Update a movie
router.delete('/:id', deleteMovie); // Delete a movie

export default router;