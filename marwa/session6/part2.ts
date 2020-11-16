function a() {
    setTimeout(function () {
        console.log(8)
    },5000)
  //  return 3+7
}

function b() { //7 1 5 1
    console.log('a')
    a()
    console.log('ay 7aga')
}
b()

// x => y=get(api)//3   y0.1  3.1
// x start  5     2
// y 
// api
// x end

/*
settime => 5 => x
         5   y
         5 z
*/