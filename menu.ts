window.onload = function () {
  console.log("entro");

  let EventoOnClick = document.getElementById(id);
  EventoOnClick.onclick = function () {
    console.log(EventoOnClick?.innerHTML)
  }
  
}



