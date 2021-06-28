let data1 =  fetch('https://reqres.in/api/users/4')
.then(resp => resp.json())
.then(data1 => { 
    console.log(data1)
})

let data2 = {
    id : 4,
    email : "astrowarden@moba.ml",
    first_name : "Yve",
    last_name : "astrowarden",
    avatar : "https://reqres.in/"
}

function objectCompare(obj1, obj2) {
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    if (obj1Keys.length === obj2Keys.length) {
        return obj1Keys.every(key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key])
    }
    return false
}

console.log(objectCompare(data1, data2))