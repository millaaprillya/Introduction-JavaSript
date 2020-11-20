//Deklaration function memiliki sifat hoisting
// kaya var

// function test() {
//  return console.log("Bisa loh"); // function akan berhenti jika ketemu return

// }
// test();

//expression function
// tidak memiliki sifat hoisting
// hanya di jalan di panggil sekali dan ga flexsibel
// const test = () => {
//   return console.log("'Berhasil Testing");
// };

//Peletakan parameter sangat penting
const sum = (params) => {
  //   console.log(param.param1);
  let penjumlahan = params.param1 + params.param2;
  let pengurangan = params.param1 - params.param2;
  return { penjumlahan, pengurangan };
};
console.log(sum({ param2: 1, param1: 2 }));

//jika fungsi udh ketemu return dia bakal berhenti
//kalo proses nya belum selesai jangan dulu ada return
// kalo bisa di paling bawah
// return suka mengembalikan nilai

// function loop() {
//     let a = 0;
//     for (let i = 0; i <= 5; i++) {
//       a += i;
//     }
//     return a;
//   }
//   console.log(loop());
