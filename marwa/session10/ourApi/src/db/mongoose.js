const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ourApi',{
    useNewUrlParser: true, //json
    useCreateIndex: true, //indexing
    useFindAndModify:true
})