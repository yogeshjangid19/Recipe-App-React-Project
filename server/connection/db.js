import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    // console.log(conn);
    console.log(
      chalk.bgMagenta.white(`Connected to MongoDB `)
    );
  } catch (error) {
    console.error(chalk.bgRed.white(`Error in connection ${error}`));
  }
};
export default connectDB;



