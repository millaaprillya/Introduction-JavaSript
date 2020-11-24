//PROMISE
let getDataHobby = new Promise((resolve, reject) => {
  let sukses = true;
  let data = ["Futsal", "Batminton"];
  if (sukses) {
    //console.log("Berhasil data di ambil ");
    resolve(data);
  } else {
    // console.log("Gagal");
    reject(new Error("Gagal Mengambil data "));
  }
});
getDataHobby
  .then((result) => {
    console.log(result.toString());
  })
  .catch((error) => {
    console.log(error);
  });

//Resolve => Then kondisi berhasil
// Reject => Catch jika kondisi gagal

// let getDataHobby2 = () => {
//   let success = true;
//   let data = ["Futsal", "Badminton"];
//   if (success) {
//     return data;
//   } else {
//     return new Error("Gagal Mengambil Data !");
//   }
// };
// console.log(getDataHobby2());
