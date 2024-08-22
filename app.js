let menuList = document.getElementById("menu-list");
let menuBar = document.getElementById("menu-bar");
let imagesFile = document.querySelectorAll(".show");
let servicesEl = document.getElementById("services")


menuBar.addEventListener("click",menuAction);

menuList.style.maxWidth = "0px"

function menuAction(){
  if(menuList.style.maxWidth =="0px"){
    menuList.style.maxWidth = "100%"
  }else{
    menuList.style.maxWidth = "0px"
  }
  
  if(menuBar.classList.contains("fa-bars")){
    menuBar.classList.replace("fa-bars","fa-x")
  }else{
    menuBar.classList.replace("fa-x","fa-bars")
  }
}

imagesFile.forEach(image => {
  image.addEventListener("mouseover", () => {
    image.style.position = "fixed";
    image.style.top = "50%";
    image.style.left = "50%";
    image.style.transform = "translate(-50%, -50%)";
    image.style.width = "90%";
    image.style.height = "90%";
    image.style.zIndex = "1000";
  });

  image.addEventListener("mouseout", () => {
    image.style.position = "static";
    image.style.top = "auto";
    image.style.left = "auto";
    image.style.transform = "none";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.zIndex = "auto";
  });
});

function myServices(){
  window.location.href="index2.html"
}

function myProduct(){
  window.location.href="index3.html"
}
function myContact(){
  window.location.href="index4.html"
}
function myAbout(){
  window.location.href="index5.html"
}




