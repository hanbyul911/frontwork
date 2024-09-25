function showImg(imgName) {
  let img = document.getElementById("innerImg");
  img.src="img/" + imgName;
}

function hideImg() {
  let img = document.getElementById("innerImg");
  img.src="";
}