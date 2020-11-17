const add = (a, b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject('number must be positive')
            }
            resolve(a+b)
        },3000)
    })
}

// add(3,5).then(data=> console.log(data) ) .catch(e=>{})

const checkPromise= async() =>{
    const x = await add(2,3)
    const z = await add(x,6)
    return z
    //console.log(z)
}

checkPromise().then((res)=>console.log(res))

/*
class user => name score trial lose win score =0 trials =0 lose 0 
win 0 trial+1 scroe1 lose 1 lose = 6 => game over
class key => len , key  => set key , check 
key('jelly') 5 jelly
user ('a) userin('k') score =0 tra= 1 lose 1
j 1 2 1
x 1 3 2
*/

