const newsRouter = require("./news.route");
const sitesRouter = require("./sites.route");

function router(app) {
    app.use("/new", newsRouter);
    app.use("/", sitesRouter);

}

module.exports = router;






