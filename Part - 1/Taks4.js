//Taks 4
// Mengubah data dengan spread oprator
// - Name, email , hobby ,
// Mengambil Street city (destruring)

let data = {
  id: 1,
  name: "Leanne Graham",
  Username: "Breat",
  email: "Sincereapril@aprill.biz",
  hobby: "Singing",
  address: {
    street: "kulkas Light",
    suite: "apt, 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Menganti (Replace) data
const newObject = {
  ...data,
  name: "Leane Graham",
  name: "Mila Aprillya",
  username: "Breat",
  username: "millaapr",
  email: "sincere@aprill.biz",
  email: "milliaaprillya22@gmail.com",
  hobby: "Singing",
  hobby: "tidur",
};
console.log(newObject);

// Memanggil data (address , street)
let {
  address: { street: foo, city: bar },
} = data;

console.log(foo);
console.log(bar);
