//Membuat 2 program mengunakan promise

// 1. Program mengelola gaji

// const kelolaGaji = (gaji) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kebutuhan = gaji * 0.40
//       const investasi = gaji * 0.10
//       const sedekah  = gaji * 0.02
//       const needed = gaji *
//       if (gaji) {
//         resolve(gaji);
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

//2. Grade

const cekNilai = (indo, mtk, inggris, ipa) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jumlah = (indo + mtk + inggris + ipa) / 4;
      const x = jumlah;
      const predikat =
        x > 90
          ? "Grade A"
          : x >= 80 && x <= 70
          ? x + "Grade B"
          : x >= 60 && x > 50
          ? x + " Grade C"
          : x + "Grade E";
      if (predikat) {
        resolve(predikat);
      } else {
        reject(new Error("Data Kosong"));
      }
    }, 2000);
  });
};
cekNilai(80, 70, 65, 40)
  .then((predikat) => {
    console.log("Total Nilai : " + predikat);
  })
  .catch((err) => {
    console.log(err);
  });
