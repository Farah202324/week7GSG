const { join } = require("path");

const error500 = (req, res) => {
  res.sendFile(
    join(__dirname, "..", "..", "..", "public", "html", "error500.html")
  );
};

module.exports = { error500 };
