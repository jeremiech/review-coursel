
function deepCloning(obj){
    let newObj={...obj}
    for(let i in newObj){
        if(typeof newObj[i]==='object'){
            newObj[i]=deepCloning(newObj[i])
        }

    }
    return newObj
}
// let circle1 = {
//     radius: 100,
//     center: {
//         x: 100,
//          y: 100
//     }};
//     console.log(deepCloning(circle1))