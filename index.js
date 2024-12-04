// const app = require('./app');
// const connectDB = require('./config/db.config');
import app from './app.js';
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDB from './config/db.config.js';



// Connect to the database
await connectDB();

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});
