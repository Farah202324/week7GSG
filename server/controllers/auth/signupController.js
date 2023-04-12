const bcrypt = require("bcrypt");
const { signupSchema } = require("../../validation");
const { postUserData } = require("../../database/queries");
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
    postUserData(signupHash);
    res.redirect("/signin");
  });
};
module.exports = { signUp };
