import express from "express";
import bodyParser from "body-parser";

import * as errorOnCallback from "./error-on-callback.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/error-on-callback", (req, res) => {
    errorOnCallback.execute(res);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
