const express=require('express')
const cors = require('cors')
var multer  = require('multer')

require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT ||3000
app.use(cors())

const uploadFile = multer({
    dest:'images',
    limits:{
        fileSize: 102400000
    },
    fileFilter(req,file,callBack){
        if(!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)){
            return callBack(new Error('please insert .....'))
        }
        callBack(undefined, true)
    }
})

app.post('/addImage', uploadFile.single('file'),(req,res)=>{
    res.send()
},(
    error

)=>{
res.send(error)
}
)

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port)
