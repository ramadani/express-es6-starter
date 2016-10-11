import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
    name        : String,
    email       : String,
    phone       : String,
    age         : Number
})

export default mongoose.model('User', schema)