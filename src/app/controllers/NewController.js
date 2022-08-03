class NewComponent {
    render(req, res) {
        res.render("new")
    }
    show(req, res) {
        res.send("Hello")
    }

}

module.exports = new NewComponent();