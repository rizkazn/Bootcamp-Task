const getmonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January, February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } 
        else {
            callback = new Error('Sorry Data Not Found', [])
        }
    }, 4000)
}

getmonth((err, result) => {
    if(!err){
        console.log(result.map(month => month))
    }
    else {
    console.log(err)
    }
})
