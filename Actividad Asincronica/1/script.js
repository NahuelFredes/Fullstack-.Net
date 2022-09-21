
document.getElementById("nav_red").addEventListener("mouseover", mouseOverR);
document.getElementById("nav_red").addEventListener("mouseout", mouseOutR);

function mouseOverR() {
  document.body.style.backgroundColor = 'red';
}

function mouseOutR() {
    document.body.style.backgroundColor = 'rgb(157, 225, 225)';
}

document.getElementById("nav_green").addEventListener("mouseover", mouseOverG);
document.getElementById("nav_green").addEventListener("mouseout", mouseOutG);

function mouseOverG() {
  document.body.style.backgroundColor = 'green';
}

function mouseOutG() {
    document.body.style.backgroundColor = 'rgb(157, 225, 225)';
}

document.getElementById("nav_blue").addEventListener("mouseover", mouseOverB);
document.getElementById("nav_blue").addEventListener("mouseout", mouseOutB);

function mouseOverB() {
  document.body.style.backgroundColor = 'blue';
}

function mouseOutB() {
    document.body.style.backgroundColor = 'rgb(157, 225, 225)';
}
