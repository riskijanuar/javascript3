const cekHariKerja = (day) =>{ //function dan parameter (arrow function)
    return new Promise((resolve, reject)=>{ //melakukan promise dengan parameter resolve dan reject
        setTimeout(()=>{ //membuat pengaturan waktu pengeluaran hasil
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis','jumat'] //inisialisasi variabel dengan data array
            let cek = dataDay.find((item)=>{ // melakukan pencarian data
                return item === day //melakukan return bahwa item sama dengan day
            })
            if(cek){ //malukan pengecakan dan menjalankan resolve ke dalam variabel cek
                resolve(cek) //menyimpan kembali hasil ke dalam parameter cek jika benar
            }else{ 
                reject(new Error('Hari ini bukan hari kerja')) //jika salah atau error maka pesan error akan disimpan ke dalam variabel reject
            }
        }, 3000) //waktu memunculkan output yaitu 3000 millisecond atau 3 detik
    })
}

// cekHariKerja().then((result)=>{ //melakukan passing terhadap data yang ada di parameter resolve ke parameter result
//     console.log(result) // menampilkan pesan pada parameter resolve jika berhasil/ sukses
// }) .catch((err) =>{ //melakukan passing terhadap data yang ada di parameter reject ke parameter err
//     console.log(err) //menampilkan pesan pada parameter reject jika gagal
// })

async function coba(){ 
    try{ //pembacaan parameter resolve
        const fin = await cekHariKerja() //melakukan passing data dari proses await pada function cekHariKerja dengan parameter resolve ke dalam variabel fin
        console.log(fin) // menampilkan data yang ada pada variabel fin
    }catch(error){ //pembacaan parameter reject dan melakukan passing terhadap data yang ada di parameter reject ke parameter error
        console.log(error) //menampilkan pesan error yang ada pada parameter reject
    }
}

coba()