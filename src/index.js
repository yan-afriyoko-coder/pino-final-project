import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;
import routes from "./routes/index.js";
import appMidleware from "./middleware/index.js";

import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(appMidleware);
app.use(routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
