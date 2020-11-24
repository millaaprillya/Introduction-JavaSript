// // Proses 1
// console.log("Hello");
// // proses 2
// setTimeout(() => {
//   console.log("Hello After 200ms");
// }, 2000);

// // Proses ke 3
// console.log("p3");

// //----------
// //proses 1

// let r = 7;
// let phi = null;
// console.log("Proses Deklarasi Berjalan");
// //proses 2
// setTimeout(() => {
//   console.log("Sedang mencari nilai v ");
//   if (r % 7 == 0) {
//     phi = 22 / 7;
//   } else {
//     (phi = 3), 14;
//   }
//   console.log(`nilai phi = ${phi}`);
// }, 2000);

// //Proses 3
// console.log(`Hasil Luas Lingkaran ${phi * r * r} `);

const hitungLuasLingkaran = (callback) => {
  let r = 7;
  let phi = null;
  setTimeout(() => {
    console.log("Sedang mencari nilai v ");
    if (r % 7 == 0) {
      phi = 22 / 7;
    } else {
      (phi = 3), 14;
    }
    console.log(`nilai phi = ${phi}`);
    callback(phi, r);
  }, 2000);
  //
};
hitungLuasLingkaran((phi, r) => {
  //fungsi ke 3
  console.log(`Hasil Luas Lingkaran ${phi * r * r} `);
});
