function sumTwoArray(arr,arr1){
  
    let newArr=[]
let sum=[]
    newArr.push(...arr1)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+newArr[i])
}    
}
let assum=sumTwoArray([3,3,2],[1,2,6])
console.log(assum)