const getmonth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found',[]))
        } 

    }, 4000)
} 

function nameMonth(a, data){
    if (a == null){
        const fin = data.map(function(arr){
        return [arr].join(" ")

        })
        console.log(fin)
    } else {
        console.log(a)
    }
}

return getmonth(nameMonth)