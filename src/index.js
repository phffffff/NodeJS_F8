const express = require('express')
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require("path")



const app = express()
const port = 3000

//set static public
app.use(express.static(path.join(__dirname, "/public")))
//HTTP logger
app.use(morgan("dev"))
//Engin

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "/resources/views"));

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})