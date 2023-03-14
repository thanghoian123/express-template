import config from "./config.js";
import express from "express";
import apiV1Router from "./src/routes/firstRoute.js";
import { errorMiddleWare } from "./src/middlewares/errorHandlerMiddleware.js";

const app = express();
const port = config.PORT || 3000;

app.use("/v1", apiV1Router);
app.use(errorMiddleWare);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
