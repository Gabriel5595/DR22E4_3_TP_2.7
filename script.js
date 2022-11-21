const body = document.getElementsByTagName("body")[0];
const botton = body.getElementsByTagName("botton")[0];
const p = document.getElementById("nome");

function mudaP() {
  p.setAttribute("class", "texto");
  console.log(p);
}