const { join } = require("path");

const signUp = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "signUP.html")
  );
};

module.exports = { signUp };
