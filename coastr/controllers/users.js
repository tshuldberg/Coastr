const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

async function signup(req, res) {
  const user = new User(req.body);
  console.log("HELLO:", req.body);
  console.log(user);
  try {
    await user.save();
    console.log("catch the error: ", user);

    // Delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    console.log("catch the error: ", err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  if (User.findOne({ email: req.body.email })) console.log("true");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      console.log(err);
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

module.exports = {
  signup,
  login,
};
