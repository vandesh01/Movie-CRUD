import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;

