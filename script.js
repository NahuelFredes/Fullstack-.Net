
document.getElementById("nav_red").addEventListener("mouseover", mouseOverR);
document.getElementById("nav_red").addEventListener("mouseout", mouseOut);

function mouseOverR() {
  document.body.style.backgroundColor = 'red';
}
function mouseOut() {
    document.body.style.backgroundColor = 'rgb(157, 225, 225)';
}



document.getElementById("nav_green").addEventListener("mouseover", mouseOverG);
document.getElementById("nav_green").addEventListener("mouseout", mouseOut);
function mouseOverG() {
  document.body.style.backgroundColor = 'green';
}



document.getElementById("nav_blue").addEventListener("mouseover", mouseOverB);
document.getElementById("nav_blue").addEventListener("mouseout", mouseOut);
function mouseOverB() {
  document.body.style.backgroundColor = 'blue';
}