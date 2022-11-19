"use strict";

const myForm = document.querySelector("#my-form");

// myForm.onsubmit = e => {
//     e.preventDefault();

// }

myForm.onclick = () => {
    document.querySelectorAll("[required]").forEach(element=>{
        element.classList.add('required');
    })
}