fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(data => {
    data.forEach(data => {
        const hasil = data.name
        console.log(`Name : ${hasil}`)
    })
})
.catch(err => console.log(err))