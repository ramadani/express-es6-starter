import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import errorhandler from 'errorhandler'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
import appRoot from 'app-root-path'
import serveStatic from 'serve-static'

// Applocation boot
import connection from './bootstrap/database'

// Application import
import routes from './app/Http/routes'
import handler from './app/Exceptions/Handler'

const app = express()

// Compress
app.use(compression())

// Show log on console
app.use(logger('dev'))

// Get request data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// CSRF middleware
app.use(csrf({ cookie: true }))

// Serve static file. ex css, js, etc
app.use(serveStatic(`${ appRoot.path }/public`))

// View engine setup
app.set('views', `${ appRoot.path }/resources/views`)
app.set('view engine', 'pug')

// Open connection to database
connection.open()

// Application routes
routes(app)

// Handler exception
handler(app)

app.listen(3000, () => {
    console.log('Express listening on port 3000')
})