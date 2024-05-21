import contact from "../model/contactSchema.js";
import nwslttr from "../model/newsletterSchema.js";
import recipe from "../model/recipeSchema.js";
import User from "../model/userSchema.js";
import express from 'express'

const router = express.Router();
router.get('/', (req, res) => {
  res.send(`Hello world from the server router.js Also here Newsletter `);
})

router.get('/signup', (req, res) => {
  res.send(`Hello world SignuPP Pageee`);
})
router.get('/addrecipe', (req, res) => {
  res.send(`Recipee Router`);
})
router.get('/contact', (req, res) => {
  res.send(`Contact Us Router`);
})

router.post('/signup', async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already registered" });
    }
    else if (password != cpassword) {
      return res.status(401).json({ error: "Passwords do not match" });
    } else {
      const newUser = new User({ name, email, phone, password, cpassword });
      await newUser.save();
      res.status(200).json({ message: "User registered successfully" });
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register" });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User Signin Successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/addrecipe", async (req, res) => {
  const { id, recipeName, desc, category, ingredients, directions } = req.body;

  if (!id || !recipeName || !desc || !category || !ingredients || !directions) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }
  try {
    const recipeExist = await recipe.findOne({ recipeName: recipeName });
    if (recipeExist) {
      return res.status(422).json({ error: "Recipe already Added" });
    }
    // Create a new Doctor based on the request body
    const newRecipe = new recipe({ id, recipeName, desc, category, ingredients, directions });
    // Save the new recipe to the database
    await newRecipe.save();
    // Respond with a success message
    res.status(201).json({ message: "Recipe added successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An errorr occurred " });
  }
});

router.post("/contact", async (req, res) => {
  const { name, email, mobile, msj } = req.body;

  if (!name || !email || !mobile || !msj) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }
  try {
    const queryExist = await contact.findOne({ msj: msj });
    if (queryExist) {
      return res.status(422).json({ error: "Query already Added" });
    }
    
    const newQuery = new contact({ name, email, mobile, msj });
    // Save the new recipe to the database
    await newQuery.save();
    // Respond with a success message
    res.status(201).json({ message: "Your Query Has been Sent" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An errorr occurred" });
  }
});



router.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }
  try {
    const emailExist = await nwslttr.findOne({ email: email });
    if (emailExist) {
      return res.status(422).json({ error: "Email already subscribed" });
    }
    // Create a new Doctor based on the request body
    const newEmail = new nwslttr({ email });
    // Save the new recipe to the database
    await newEmail.save();
    // Respond with a success message
    res.status(201).json({ message: "Email Subscribed successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An errorr occurred " });
  }
});

export default router;