const { engine } = require('express-handlebars');

function configViewEngine(app) {
    app.engine('handlebars', engine());
    app.set('view engine', 'handlebars');
    app.set('views', "src/app/views");
}

module.exports = configViewEngine;