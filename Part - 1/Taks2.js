// Taks 2
// Membuat program yang menghitung rata2 nilai

//---------------------------------------------//
function nilaiPel(mtk, indo, inggris, ipa) {
  const jumlah = mtk + indo + inggris + ipa;
  const x = jumlah / 4;

  if (x == 0) {
    console.log("Data tidak Boleh kosong");
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
    console.log("Rata2 Nilai :" + x);
    console.log("Grade" + " " + "E");
  } else {
    console.log("Null");
  }
}
nilaiPel(90, 89, 69, 80);
