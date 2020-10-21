"use strict";
window.onload = function () {
    console.log("entro");
    var EventoOnClick = document.getElementById('inicio');
    EventoOnClick.onclick = function () {
        console.log("dio click");
    };
};
