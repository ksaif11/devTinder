const express = require("express");
const { connectToDB } = require("./config/database");
const { User } = require("./model/user");
const app = express();

app.use(express.json());

// signup method
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const userObj = req.body;

  // creating an instance of User Model
  const newUser = new User(userObj);

  try {
    await newUser.save(); // returns Promise
    res.send("User saved in database successfully!!!!!!!!!!!!");
  } catch (error) {
    res.status(404).send("there is an error:" + error.message);
  }
});


// get user by emailId
app.get("/user", async (req, res) => {
  console.log(req.body);
  const user = req.body.emailId;
  try {
    const userInfo = await User.findOne({ emailId: user });
    res.send(userInfo);
  } catch (error) {
    console.log("errro hai");
  }
});

// get all users
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(200).send("No data found!");
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    console.log("err h" + error.message);
  }
});

// update an user
app.patch("/update", async (req, res) => {
  const userId = req.body.emailId;
  const userData = req.body;
  try {
    const updated = await User.findOneAndUpdate({ emailId: userId }, userData, {
      returnDocument: "before",
    });
    console.log(updated);
    res.status(200).send("update done!!!");
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrrr");
    res.status(404).send("eeeeeeeeeeeoooooooorrrrrrrrr");
  }
});

// delete an user
app.delete("/delete", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  try {
    await User.findByIdAndDelete(userId);
    res.send(userId + " user is deleted!");
  } catch (error) {
    console.log("user is deleted!");
  }
});



connectToDB()
  .then(() => {
    console.log("DB is connected!!!");

    app.listen(9999, () => {
      console.log("hi from nodejs!");
    });
  })
  .catch(() => {
    console.log("DB is not connected!!!!!");
  });
