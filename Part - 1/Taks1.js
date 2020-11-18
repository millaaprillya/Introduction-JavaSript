// TAKS 1
//1.  Membuat biodata dengan nama dan tipe data object

//Name string
const name = "Milla Aprillya";
// age number
const age = 19;
//hobbies  array
const hobbies = ["travelling", "listening music", "sleep"];
// Is merried = boolean || true || false
const merried = false;
//SchoolList cek (Array of object)
const schoolList = {
  name: "Milla Aprillya",
  school: [
    "School",
    { SDN: "SDN Pasirkaliki", yearOut: 2012 },
    { SMP: "SMP 32 Bandung", yearOut: 2017 },
    { SMA: "SMK BPI Bandung", yearOUt: 2019 },
    { Major: "Teknik Informatika" },
  ],
};

const skills = {
  nameSkill: [
    "Skill",
    { javaScript: "Beginner" },
    { php: "Beginner" },
    { css: "Beginner" },
  ],
  InterestCoding: true,
};

//ouput
console.log(typeof name);
console.log(typeof age);
console.log(typeof hobbies);
console.log(typeof merried);

//ouput School List
console.log(typeof schoolList);
console.log(schoolList);

//ouput Skills
console.log(typeof skills);
console.log(skills);
