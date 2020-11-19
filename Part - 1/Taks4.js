//Taks 4

// Mengubah data  dan menambah data dengan spread oprator
// - Name, email , hobby ,
// Mengambil data  Street city (destruring)

let data = {
  id: 1,
  name: "Leanne Graham",
  Username: "Breat",
  email: "Sincereapril@aprill.biz",
  address: {
    street: "kulkas Light",
    suite: "apt, 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Menganti dan menambah data
const newObject = {
  ...data,
  name: "Mila Aprillya",
  email: "milliaaprillya22@gmail.com",
  hobby: "tidur",
};
console.log(newObject);

console.log("");

// Memanggil data (address , street)
let {
  address: { street, city },
} = data;

console.log(street);
console.log(city);
