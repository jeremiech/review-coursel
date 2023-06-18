function sumOfDifferences(arr) {
    var sum=0
    let sortted=arr.sort((a,b)=>b-a)
    for(let i=1;i<sortted.length;i++){
        let diff_sum=sortted[i]-sortted[i-1]
        sum+=diff_sum
    }
    return Math.abs(sum)
}
console.log(sumOfDifferences([2,10,1]))