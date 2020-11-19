//Taks 3
// Membuat Segitiga terbalik

//const x = "enam"
const x = 15;
if (isNaN(x)) {
  // >jika bukan angka
  console.log("Data harus angka  !! " + typeof x);
} else {
  for (i = 0; i < x; i++) {
    for (j = i; j < x; j++) {
      process.stdout.write(j + " "); // menambah baris baru
    }
    console.log();
  }
}
