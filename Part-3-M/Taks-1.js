const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item == day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Data bukan hari kerja "));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((cek) => {
    const cekHari = cek[0].toUpperCase() + cek.slice(1);
    console.log(cekHari + " Hari Kerja");
  })
  .catch((error) => {
    console.log(error);
  });

const checkFunction = async (req, error) => {
  try {
    const check = await cekHariKerja(req);
    const cekDay = check[0].toUpperCase() + check.slice(1);
    console.log(cekDay + " " + "Hari Kerja");
  } catch (error) {
    console.log(err);
  }
};
checkFunction("jumat");
