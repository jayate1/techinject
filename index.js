const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
require('./src/config/db.connection')
const JWT = require('./src/middleware/jwt.middleware')
const router = require('./src/routes')
const server = app.listen(80, "0.0.0.0", () => {
    console.log(`app listening at 80`);
});
app.use("/", JWT.VERIFY, router);