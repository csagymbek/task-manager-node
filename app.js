const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// connecting to the database
const start = async () => {
  try {
    await connectDB();
    // listening
    app.listen(port, console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error.message);
  }
};
start();
