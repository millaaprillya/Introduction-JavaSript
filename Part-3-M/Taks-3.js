//Membuat 2 program mengunakan promise

// 1. Program mengelola gaji

const kelolaGaji = (gaji) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!gaji || isNaN(gaji)) {
        reject(new Error("Data is null  & Data has number !"));
      } else {
        const Hidup = gaji * 0.4;
        const investasi = gaji * 0.2;
        const cicilan = gaji * 0.2;
        const sedekah = gaji * 0.1;
        const asuransi = gaji * 0.1;
        const jumlah = Hidup + investasi + cicilan + sedekah + asuransi;
        const kelolaGaji = [
          gaji,
          sedekah,
          cicilan,
          investasi,
          Hidup,
          asuransi,
          jumlah,
        ];
        resolve(kelolaGaji);
      }
    }, 2000);
  });
};

kelolaGaji(6000000)
  .then((kelolaGaji) => {
    console.log("----Kelola Gaji-----");
    console.log(
      "Gaji Anda Rp. " +
        kelolaGaji[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") // toFixed = merubah integer memiliki 2 presisi di belakang koma
    );
    console.log(
      "Biaya Hidup : Rp." +
        kelolaGaji[4].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
    console.log(
      "Biaya investasi : Rp." +
        kelolaGaji[3].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
    console.log(
      "Biaya cicilan : Rp." +
        kelolaGaji[2].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
    console.log(
      "Biaya sedekah : Rp." +
        kelolaGaji[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
    console.log(
      "Biaya asuransi  : Rp." +
        kelolaGaji[5].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
    console.log(
      "Jumlah  :" + kelolaGaji[6].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    );
  })
  .catch((err) => {
    console.log(err);
  });

//2. Grade
const cekNilai = (indo, mtk, inggris, ipa) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jumlah = (indo + mtk + inggris + ipa) / 4;
      const x = jumlah;
      if (!indo || !mtk || !inggris || (!ipa && isNaN(jumlah))) {
        reject(new Error("Data null & Data has number !"));
      } else {
        const predikat =
          x > 90
            ? "Grade A"
            : x >= 80 && x >= 70
            ? x + " Grade B"
            : x >= 60 && x > 50
            ? x + " Grade C"
            : x + " Grade E";
        resolve(predikat);
      }
    }, 2000);
  });
};
cekNilai(90, 80, 70, 90)
  .then((predikat) => {
    console.log("--- Check Grade ---");
    console.log("Total Nilai : " + predikat);
  })
  .catch((err) => {
    console.log(err);
  });
