const bcrypt = require("bcrypt");
const { signupSchema } = require("../../validation");
const { postUserData } = require("../../database/queries");
const jwt = require("jsonwebtoken");
const signUp = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const { error, value } = signupSchema.validate(
    { name, email, password, confirmPassword },
    { abortEarly: false }
  );
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        error: error.details,
      },
    });
    return;
  }
  bcrypt.hash(password, 12).then((result) => {
    const signupHash = {
      name: name,
      email: email,
      password: result,
    };
    jwt.sign({ isLogged: true }, process.env.S_KEY, (err, token) => {
      if (err) {
        res.status(500).json({ msg: "Server Error" });
        return;
      } else {
        res.cookie("cookie", token).redirect("/employees");
      }
    });
    postUserData(signupHash);
  });
};
module.exports = { signUp };
