document.addEventListener("DOMContentLoaded",function(){
  let btn = document.getElementsByClassName("changeColor")[0];
  btn.addEventListener("click",function(){
    if(btn.classList.contains("islight")){
      changeLayout(btn.classList.contains("islight"));
      btn.classList.remove("islight")
      btn.innerHTML = "light";
    }else{
      changeLayout(btn.classList.contains("islight"));
      btn.classList.add("islight");
      btn.innerHTML = "dark";
    }
  });
});

function changeLayout(change){
  let elements = document.getElementsByClassName("change");
  if(change){
    for(var i = 0; i < elements.length; i++)
      elements[i].classList.add("dark");
  }else {
    for(var i = 0; i < elements.length; i++)
      elements[i].classList.remove("dark");
  }
}
