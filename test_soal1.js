/*NAMA : mOH YUSUF
  ALAMAT EMAIL : muhamadyusuf03112001@gmail.com
  WAKTU MULAI : 12/07/2022
  WAKTU SELESAI : 13/07/2022 */
  
const data1 = [1,1,1,2,2,4,1,1];
const data2 = [2,1,2,2,2,8,1,1];
const data3 = [3,3,3,3,2,4,1,1];

function mode(arr){
    return arr.sort((a,b) => arr.filter(v => v === a).lenght - arr.filter(v => v === b).lenght).pop();
}
const dataCount = new Map([...new Set(data1)].map( x => [x, data1.filter(y => y === x).length]));

console.log("Total data yang paling banyak keluar adalah ",mode(data1), " dengan jumlah ",dataCount.get(mode(data1)));
console.log("Total data yang paling banyak keluar adalah ",mode(data1), " dengan jumlah ",dataCount.get(mode(data2)));
console.log("Total data yang paling banyak keluar adalah ",mode(data1), " dengan jumlah ",dataCount.get(mode(data3)));


