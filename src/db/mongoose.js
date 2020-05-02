const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/palermo-manager', {
    useNewUrlParser: true, 
    useCreateIndex: true
})


const Task = mongoose.model('Task', {
    description : {
        type: String
    },
    completed: {
        type: Boolean
    }
})

