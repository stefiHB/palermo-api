
const mongoose = require('mongoose')


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if ( value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User