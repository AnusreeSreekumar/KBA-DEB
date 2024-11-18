import { Router } from "express";
import User, { findOne } from "../models/User";
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";


const auth = Router();

// User registration
auth.post("/register", async (req, res) => {
  try {
    // const {} = userDetails
    const userDetails = req.body;
    const username = userDetails.userName;
    const password = userDetails.password;
    const email = userDetails.email;
    const userType = userDetails.userType

    // const { username, password } = req.body;
    const hashedPassword = await hash(password, 10);

    const user = new User({ username, password: hashedPassword, email, userType });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// User login
auth.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const user = await findOne({ email });
    console.log(user, "user");

    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed- User doesn't exists" });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed- password doesn't match" });
    }

    const token = sign(
      { userId: user._id, userType: user.userType },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );

    res.cookie("Authtoken", token);
    res.json({
      status: true,
      message: "login success",
      userType: user.userType
    });
    //  console.log('/login in the bakend res', res)
    return res;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Logout
auth.get("/logout", (req, res) => {
  res.clearCookie("Authtoken");
  res.status(200).send("Logout successful");
  return res;
});

export default auth;