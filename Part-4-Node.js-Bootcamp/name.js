const biodata = () => {
  console.log("Hello my name is Milla");
};
const hobby = ["Membaca", "Mewarnai"];

//module.exports = biodata;
module.exports.biodata1 = biodata; // biodata1 bisa di namain proprty nya
module.exports.hobby = hobby;

// cara meng import object lebih dari 1
module.exports = { biodata, hobby };
