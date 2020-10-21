"use strict";
window.onload = function () {
    console.log("entro");
    var EventoOnClick = document.getElementById(id);
    EventoOnClick.onclick = function () {
        console.log(EventoOnClick === null || EventoOnClick === void 0 ? void 0 : EventoOnClick.innerHTML);
    };
};
