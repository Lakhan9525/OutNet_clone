import {
    navbar
} from "../components/navbar.js";
document.querySelector("#navbar-start").innerHTML = navbar();
import {
    navbar_function
} from "../components/navbar_function.js";
setTimeout(() => {
    navbar_function()
}, 1000);
