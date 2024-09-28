function increase() {
  let rocket = document.createElement("div");
  rocket.className = "rocket";
  rocket.style.position = "absolute";
  rocket.style.bottom = "0";
  rocket.style.left = "50%";
  rocket.style.transform = "translateX(-50%)";
  rocket.style.width = "50px";
  rocket.style.height = "100px";
  rocket.style.background = 'url("cohete.png") no-repeat center center';
  rocket.style.backgroundSize = "contain";
  document.body.appendChild(rocket);
  setTimeout(() => rocket.remove(), 2000);
}

function decrease() {
  let plane = document.createElement("div");
  plane.className = "plane";
  plane.style.position = "absolute";
  plane.style.top = "0";
  plane.style.left = "50%";
  plane.style.transform = "translateX(-50%)";
  plane.style.width = "50px";
  plane.style.height = "50px";
  plane.style.background = 'url("avion.png") no-repeat center center';
  plane.style.backgroundSize = "contain";
  document.body.appendChild(plane);
  setTimeout(() => plane.remove(), 2000);
}
