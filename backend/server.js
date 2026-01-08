const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/donation", require("./routes/donation"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
