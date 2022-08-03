const express = require('express');
const morgan = require('morgan');
const router = require("./routes");
const path = require("path")
const configViewEngine = require("./configs/configViewEngine");
const app = express()
const port = 3000



//set static public
app.use(express.static(path.join(__dirname, "/public")))
//HTTP logger
app.use(morgan("dev"))
//Engin
configViewEngine(app);
//body-parse
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
//router
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})