//Membuat 2 program mengunakan promise

// 1. Program mengelola gaji

// const kelolaGaji = (gaji) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kebutuhan = gaji - 0.04 / 100;
//       const cicilan = gaji - 0.1 / 100;
//       const future = gaji - 0.02 / 100;
//       const cek = gaji;
//       if (kebutuhan) {
//         resolve(kebutuhan);
//       } else {
//         reject(new Error("Gaji anda mangenaskan"));
//       }
//     });
//   });
// };

// kelolaGaji(600000)
//   .then((cek) => {
//     console.log(cek);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2. Grade

// const cekNilai = (indo, mtk, inggris, ipa) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const jumlah = (indo + mtk + inggris + ipa) / 4;
//       const x = jumlah;
//       if (x) {
//         resolve(x);
//       } else {
//         reject(new Error("Data Kosong"));
//       }
//     }, 2000);
//   });
// };
// cekNilai(80, 70, 65, 40)
//   .then((x) => {
//     const predikat =
//       x > 90
//         ? "Grade A"
//         : x >= 80 && x <= 70
//         ? "Grade B"
//         : x >= 60 && x > 50
//         ? " Grade C"
//         : "Grade E";
//     console.log("Total Nilai :" + x + " " + predikat);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
