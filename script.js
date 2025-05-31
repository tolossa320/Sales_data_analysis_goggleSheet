//let varform = document.getElementById("registorform");
//console.log(varform);
// function checkF() {
//   document.body.style.backgroundColor = "blue";
// }

// let varsubmit = document.getElementById("submition");
// varsubmit.onclick = checkF;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

function checkinfo() {
  if (username === "" || password === "") {
    console.log("please fill iformaton");
  } else {
    console.log("confirmed");
  }
}
console.log("hellow");
