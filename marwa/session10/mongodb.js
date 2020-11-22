// const id = new ObjectID("5fba26b4d98fca10c8a4d807")
// console.log(id)

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//1223  123   5698521  5697421  compare 1223   5698521
const { MongoClient, ObjectID } = require('mongodb')
const connectionURL ="mongodb://127.0.0.1:27017"
const dbname ="mydb"
var mydata 
MongoClient.connect(connectionURL, {useNewUrlParser: true},(err, client)=>{
    if(err) return console.log('problem')
    const db = client.db(dbname)
    // db.collection('students').deleteMany({name:'aaa'})
    // .then((result)=>{console.log(result.result.n)})
    // .catch((err)=>console.log(err))
    db.collection('students').updateOne(
        {name:'marwa radwan'},
        {$inc:{age:1}}
    ).then(console.log)
    .catch(console.log)

})

    //  db.collection('students').find({name: 'aaa'}).toArray((err, res)=>{
    //     console.log(res) })
   /* db.collection('students').findOne({_id:new ObjectID("5fba26b4d98fca10c8a4d807")},(err,res)=>{
        console.log(res)
    })*/





/*
findanddelete(x),(err,res)=>{console.log}
*/


//console.log(mydata)
    // db.collection('students').insertOne({
    //     name:'marwa',
    //     age:35
    // })
    // db.collection('students').insertMany([
    //     {name:"aaa"},
    //     {age:25},
    //     {name:'lll',age:50, address:'home'}
    // ]
    // ,(err, res)=>{
    //     if(err) return console.log('unable')
    //     console.log(res.result.n)
    // })
