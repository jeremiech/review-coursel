let someInteger = 129;

function swapDigits(arr){
    let digits=arr.toString().split('')
    if(digits.length%2==0)

{
    
    for(let i=0;i<digits.length-1;i+=2){
        const tmp=digits[i]
        digits[i]=digits[i+1]
        digits[i+1]=tmp
    }
}else{
    for(let i=1;i<digits.length-1;i+=2){
        const tmp=digits[i]
        digits[i]=digits[i+1]
        digits[i+1]=tmp
    }
}
    return Number.parseInt(digits.join(""))
}

  console.log(swapDigits(someInteger))