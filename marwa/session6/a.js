// const add = (a,b)=> {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(a+b),reject('error')
//         },2000)
//     })
// }

// add(1).then((sum)=>{
//     console.log(sum)
//     add(sum,3)
// .then((sum2)=>{
// //console.log(sum2)
// console.log('a')
// })}).catch((e)=>console.log('error'))


// // add(1,2)
// // .then()
// // .catch()


// const https = require('https')
// https.request('https://jsonplaceholder.typicode.com/posts',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(chunk.toString)
//     })
// })

fetch('https://jsonplaceholder.typicode.com/posts',{})
.then((res)=>{
    // if(res.status==200){

    // }
console.log(res)
})




















