const { join } = require("path");

const error404 = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "error404.html")
  );
};

module.exports = { error404 };
