// buatlah sebuah callback function yang dimana nanti akan dihitung nilai luas dan keliling lingkaran
// parent function | fungsi utama
function menghitung(r, fungsiLuas, fungsiKeliling) {
  let phi;
  if (r % 7 === 0) {
    phi = 22 / 7;
  } else {
    phi = 3.14;
  }
  let hasilHitungLuas = fungsiLuas(phi, r);
  console.log(hasilHitungLuas);
  let hasilHitungKeliling = fungsiKeliling(phi, r);
  console.log(hasilHitungKeliling);
  // let luas = phi * r * r;
  // let keliling = phi * r * 2;
  // console.log(luas);
  // console.log(keliling);
}

// child function
function luasLingkaran(phi, jarijari) {
  // console.log("fungsiLuas yang ada di fungsi utama");
  let luas = phi * jarijari * jarijari;
  return luas;
  // console.log(luas);
}

function kelilingLingkaran(phi, r) {
  let keliling = phi * r * 2;
  return keliling;
}

menghitung(7, luasLingkaran, kelilingLingkaran);
