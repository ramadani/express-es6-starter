import mongoose from 'mongoose'
import config from '../config/mongoose'

export default {
    open: function() {
        mongoose.connect(config.uri)

        let conn = mongoose.connection

        conn.on('error', () => {
            console.log('Connection error')
        })

        // conn.once('open', () => {
        //     console.log('Connection open')
        // })

        // conn.once('connected', () => {
        //     console.log('Connected to database')
        // })

        // conn.on('close', () => {
        //     console.log('Connection close')
        // })
    },

    close: function() {
        mongoose.connection.close()
    }
}