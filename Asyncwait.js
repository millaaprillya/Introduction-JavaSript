// EXPRESION FUNCTION
// const helloWorld = async () => {
//   let result = await doAsync();
//   console.log(result);
// };

//DEKLARASI FUNCTION
async function helloWorld() {
  try {
    // ini akan muncul hasil dari fungsi2 yang ada di bawah
    let result = await doAsync(); // result => "Hellow World" akan di muncul kan ketika 2 detik
    await showAsync(result); // console.log("Hasil result") proses akan berjalan kurang dari 1 detik
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// function doAsync() {
//   setTimeout(() => {
//     return "Hellwo Word";
//   }, 2000);
// }

// try to pake promise
const doAsync = () =>
  new Promise((resolve, reject) => {
    //let succes = true;
    setTimeout(() => {
      resolve("Hello world");
    }, 2000);
    setTimeout(() => {
      reject(new Error("Data gagal di ambil"));
    }, 3000);
  });

function showAsync(result) {
  setTimeout(() => {
    return console.log(result);
  }, 1000);
}

helloWorld();
