import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

/* (async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //user: config.MONGO_USER,
      //pass: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );
    console.log("Database MongoDB is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})(); */

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.okpjq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada al cloud"))
  .catch((e) => console.log("error db:", e));
