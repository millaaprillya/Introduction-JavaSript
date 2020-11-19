// Taks 2
// Membuat program yang menghitung rata2 nilai

//---------------------------------------------//
function nilaiPel(mtk, indo, inggris, ipa) {
  const jumlah = mtk + indo + inggris + ipa;
  // const n = jumlah.Math.ceil(jumlah);
  // console.log(n);
  const x = jumlah / 4;

  if (isNaN(x)) {
    console.log("Data harus berupa number");
  } else if (x >= 90) {
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "A");
  } else if (x >= 80) {
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "B");
  } else if (x >= 70) {
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "C");
  } else if (x >= 60) {
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "D");
  } else if (x <= 59) {
    //------------------------------ jika grade nya kosong yah masuk ke grade E
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "E");
  } else {
    console.log("Null");
  }
}
nilaiPel(90, 89, 69, 80);
