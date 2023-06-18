function arrayPlusArray(arr1,arr2){
  
    let newArr=[]
let sum=0
    newArr.push(...arr2)
for(let i=0;i<arr1.length;i++){
    let elementSum=arr1[i]+newArr[i]
    sum+=elementSum
}    
return sum
}
let assum=arrayPlusArray([3,3,2],[1,2,6])
console.log(assum)
