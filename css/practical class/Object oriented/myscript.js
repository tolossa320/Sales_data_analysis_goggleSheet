//object declaration
//let student = {
//fname: "abebe",
// lname: "kebede",
//}
//console.log(student);
// object declaration with function
/*
let student = {
  fname: "Tamirat",
  lname: "Tola",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(student); //print on console log tamirat & Tola
console.log(student.fullname()); // print on console log fullName
*/
//***Object constructor
function Family(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
let kebede = new Family("kebede", "fayisa");
console.log(kebede);

