//Taks 3

const x = 6;
if (isNaN(x)) {
  // >jika bukan angka
  console.log("Type not require !! " + typeof x);
} else {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(i + ""); // menambahkan baris
    }
    console.log();
  }
}
