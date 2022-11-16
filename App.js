let input = document.querySelector("#input");
let button = document.querySelector("#submit");
let qrImg = document.querySelector("#img");

button.addEventListener("click",function(){
  let data = input.value;
  if(data.length > 0){
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+data;
    qrImg.src = imgSrc;
  }
})