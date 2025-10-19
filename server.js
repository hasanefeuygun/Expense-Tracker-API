require("dotenv").config();
const createApp = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT;

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB connected ✅");

    const app = createApp();
    app.listen(port, () => {
      console.log(`Server listening request on port ${port}`);
    });
  } catch (err) {
    console.error("DB connection failed", err);
    process.exit(1);
  }
}

start();
