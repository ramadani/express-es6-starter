import UserController from './Controllers/UserController'

export default function(app) {
    app.get('/', (req, res) => {
        let title = 'My Web'
        let message = 'Hello there!'

        res.render('index', { title, message })
    })

    app.get('/user', UserController.index)
}