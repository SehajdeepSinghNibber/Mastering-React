//Never can be used for, eg

//  A function that always throws error
//  A function that has infinite loop
//  A Variable that can never have a high value

//A function that never throws error
function throwError(msg:string):never {
    throw new Error(msg)
}

//  A function that has infinite loop
function infiniteLoop():never{
    while(true){}
}

//  A variable that can never have a value

let x:never

function neverReturns():never {
    while(true){}
}

x = neverReturns() //this line will couse a compile time error since the function never returns