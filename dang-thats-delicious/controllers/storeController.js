exports.myMiddleware = (req, res, next) => {
    req.name = 'Robert'
    next()
}

exports.homePage = (req, res) => {
    res.render('index')
}