const getmonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "juni",
      "july",
      "August",
      "September",
      "October",
      "November",
      "october",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data is not found, "), []);
    }
  }, 2000);
};

cekMonth = (err, month) => {
  if (month != 0) {
    const cekData = month;
    const cek = cekData.map((data) => console.log(data));
  } else {
    console.log(err);
  }
};

getmonth(cekMonth);
