const express = require("express");
const app = express();
const port = 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
