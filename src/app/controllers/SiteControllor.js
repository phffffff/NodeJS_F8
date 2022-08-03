class SiteController {
    renderHome(req, res) {
        res.render("home")
    }
    renderNews(req, res) {
        res.render("new")
    }
}

module.exports = new SiteController();