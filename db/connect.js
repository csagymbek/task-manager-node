const mongoose = require("mongoose");
const connectionStr =
  "mongodb+srv://ssagymbe:27031989@task-manager.pva7r.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
