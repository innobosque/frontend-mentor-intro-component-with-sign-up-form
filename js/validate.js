"use strict";

const myForm = document.querySelector("#my-form");
const btn = document.querySelector(".btn");

// myForm.onsubmit = e => {
//     e.preventDefault();

// }

btn.onclick = () => {
    document.querySelectorAll("[required]").forEach(element=>{
        element.classList.add('required');
    })
}