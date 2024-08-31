import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// configures dotenv to work in your application
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());

app.use("/", routes);


app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error: any) => {
    // gracefully handle error
    throw new Error(error.message);
  });

export { app };
