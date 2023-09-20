const mongoose = require('mongoose')

//1. Creating schema

const schema = new mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    budget: Number,
    expenses: [
        {
            _id: String,
            name: String,
            date: Date,
            category: String,
            cost: Number
        }
    ]
})

//2. connect to a specific collect
const UserModel = mongoose.model('budget', schema)

//3. export model so it can be used

module.exports = UserModel;