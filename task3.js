const cekNama = () =>{ 
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{ 
            const dataNama = ['reza', 'topan', 'ardi', 'zaki','riski']
            let cek = dataNama.filter(function(arr){
                return arr.includes("an")
              })
            if(cek){
                resolve(cek)
            }else{ 
                reject("Tidak Ketemu") 
            }
        }, 3000)
    })
}

cekNama().then((result)=>{
    console.log(result)
}) .catch((err) =>{
    console.log(err)
})

const reminder = () =>{ 
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{ 
            const bulan = "April"
            const tanggal = 13
            if(bulan == "April" && tanggal == 13){
                resolve("Selamat Ulang Tahun")
            }else{ 
                reject("Belum waktunya") 
            }
        }, 3000)
        setTimeout(()=>{ 
            const bulan = "April"
            const tanggal = 13
            if(bulan == "April" && tanggal == 13){
                console.log("Ciee Ultah")
            }else{ 
                console.log("Sabar yaa") 
            }
        }, 4000)
    })
}

async function ucapan(){ 
    try{ 
        const result = await reminder() 
        console.log(result) 
    }catch(err){ 
        console.log(err)
    }
}

ucapan()