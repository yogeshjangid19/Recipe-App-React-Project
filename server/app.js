import express from "express";
import colors from "colors";
import connectDB from "./connection/db.js"; // Import the database connection function
import morgan from "morgan"; //Fetching karenge usko  console me help karaega
import cors from "cors";
import dotenv from "dotenv";
import auth from './routes/auth.js';
import recipe from "./model/recipeSchema.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
// Establish the MongoDB connection
connectDB();
app.use(express.json())

//Link  the routes files to make our route
app.use('/', auth);
app.use('/signup', auth);
app.use('/addrecipe', auth);
app.use('/contact', auth)

//Middlewares beech ki proces hoti hai like user checking
// Middleware to parse JSON request bodies

// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

const config = {
  // ...
  devServer: {
    setupMiddlewares: (devServer) => {
      app.use(cors());
      app.use(express.json());
      app.use(morgan("dev"));
      // Your middleware setup logic
    },
  },
  // ...
};

// const middleware=(req,res,next)=>{
//     console.log(`Hello my middlewarre`);
//     next();

// }


//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Expressz App",
  });
});

app.get("/recipes", async (req, res) => {
  try {
    const allrecipes = await recipe.find({});
    res.send({ status: "ok", data: allrecipes })
  } catch (error) {
    console.log(error)
  }
})

// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});











