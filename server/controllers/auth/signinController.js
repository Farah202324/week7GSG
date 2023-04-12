const { join } = require("path");

const signIn = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "index.html")
  );
};

module.exports = { signIn };
