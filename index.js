const math=require('mathjs')
let arrDate=[31, 10, 1991]

let day=1000*3600*24
let date=new Date(`${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`).getTime()
let difDate=new Date(`${1}/${1}/${arrDate[2]}`).getTime()
let realDateDiff=math.subtract(date,difDate)+1
console.log(Math.ceil(realDateDiff/day))


