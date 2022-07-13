/*NAMA : mOH YUSUF
  ALAMAT EMAIL : muhamadyusuf03112001@gmail.com
  WAKTU MULAI : 12/07/2022
  WAKTU SELESAI : 13/07/2022 */


/*Segitiga Siku-Siku Kanan*/
function segitiga1(panjang){
    let hasil = "";
    for(let i = 0; i<=panjang ;i++){
        for(let j = 0; j<= i; j++){
            hasil += "*"
        }
        hasil +="\n";
    }
    return hasil;
}
/*Segitiga Siku-Siku Kiri*/
function segitiga2(panjang){
    let hasil = "";
    for(let i = 1; i <= panjang; i++){
        for(let j = panjang - 1; j >= i; j--){
            hasil += " ";
        }
        for (let k = 1; k <= i; k++){
            hasil += "*";
        }
        hasil += "\n";
    }
    return hasil;

}

console.log(segitiga1(5));
console.log(segitiga2(5));