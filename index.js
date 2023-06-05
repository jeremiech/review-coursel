function manipulateValues(...n){
    let evenArray=[]
    let oddArray=[]
  
    for(let i=0;i<n.length;i++){
        if(n[i]%2==0) evenArray.push(Math.floor(Math.sqrt(n[i])))
        else oddArray.push(n[i]**2)

    }
    return evenArray.concat(oddArray).join(" ")
}
console.log(manipulateValues(4,3,9,7,2,1))
