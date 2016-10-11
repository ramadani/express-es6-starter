export default function(app) {
    app.use((err, req, res, next) => {
        let { status, message } = err

        res.status(status || 500)
        res.render('errors/default', { message, error: err })
    })
}