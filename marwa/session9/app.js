const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname,'/public')
const viewsDir = path.join(__dirname,'/template/views')
const partialsDir = path.join(__dirname,'/template/partials')
app.set('view engine','hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)
app.use(express.static(publicDir))

app.get('/about',(req,res)=>{
    res.render('index',{
        name: 'marwa',
        status:false,
        data :[1,2,3,4,5],
        x:[
            {name:'a', age:30},
            {name:'b',age:40}
        ]
    })
})
app.get('*',(req,res)=>res.render('404'))

app.listen(port)




// app.get('',(req,res)=>{res.send('ay 7aga')})

// app.get('/x',(req,res)=>res.send('<h3>hi</h3>'))

// app.get('/mydata',(req,res)=>{
//     data = {
//         name:'a',
//         age:50
//     }
//     res.send(data)
// })
