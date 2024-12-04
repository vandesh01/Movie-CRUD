import mongoose from 'mongoose';
import { DB_NAME } from "../constants/constant.js";


const connectDB = async () => {
  try {

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    // await mongoose.connect('mongodb://127.0.0.1:27017/moviesDB', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDB;
