import {
    signup
} from "../components/signup.js";
import {
    signin
} from "../components/signin.js"
document.querySelector("#s-user_input").innerHTML = signup();
let btn1 = document.querySelector("#s-pointer3");
btn1.addEventListener("click", gotosignin);
let promotion_btn1 = document.querySelector("#s-pointer4");
let promotion_btn2 = document.querySelector("#s-pointer5");
let register = document.querySelector("#s-register");
register.addEventListener("click", signup_data);
change_bgc_of_promitio();
let from_local = JSON.parse(localStorage.getItem("user_cred"));
if (from_local == null) {
    var user_login_data = [];
} else {
    user_login_data = from_local;
}

function gotosignin() {
    document.querySelector("#s-user_input").innerHTML = signin();
    let btn3 = document.querySelector("#s-pointer2");
    btn3.addEventListener("click", gotosignup);
    let btn2 = document.querySelector("#s-pointer3")
    btn2.style.backgroundColor = "green";
    let sig = document.querySelector("#s-signin");
    sig.addEventListener("click", login_data);
}

function gotosignup() {
    document.querySelector("#s-user_input").innerHTML = signup();
    let btn1 = document.querySelector("#s-pointer3");
    btn1.addEventListener("click", gotosignin);
    let btn3 = document.querySelector("#s-pointer2");
    btn3.style.backgroundColor = "green";
    let register = document.querySelector("#s-register");
    register.addEventListener("click", signup_data);
}

function login_data() {
    let count = 0;
    event.preventDefault();
    let email_s = document.querySelector("#s-email");
    let email = email_s.value;
    let pass_s = document.querySelector("#pass");
    let pass = pass_s.value;
    let user_data = JSON.parse(localStorage.getItem("user_cred"));
    for (let i = 0; i < user_data.length; ++i) {
        if (user_data[i].email == email && user_data[i].password == pass) {
            ++count;
            localStorage.setItem("signed", JSON.stringify(user_data[i]));
            alert("Login SuscessFull");
            window.location.href = "mens.html";

        }
    }
    if (count <= 0) {
        alert("User Not exist Create account or enter right credntial");
    }
    email_s.value = "";
    pass_s.value = "";
}

function signup_data() {
    event.preventDefault();
    let email = document.querySelector("#s-email").value;
    let pass = document.querySelector("#pass").value;
    let fst_name = document.querySelector("#s-fst-name").value;
    let lst_name = document.querySelector("#s-lst-name").value;
    if (email && pass && fst_name && lst_name != "") {
        var user_data = {
            email: email,
            password: pass,
            first_name: fst_name,
            last_name: lst_name,
        }
        user_login_data.push(user_data);
        localStorage.setItem("user_cred", JSON.stringify(user_login_data));
        alert("Account Created Please Login");
        gotosignin();
    }
}

function set_data_in_local(data) {
    localStorage.setItem("user_cred", JSON.stringify(data));
}

function changebgc1() {
    event.preventDefault();
    promotion_btn1.style.backgroundColor = "green";
    promotion_btn2.style.backgroundColor = "white";
}

function changebgc2() {
    event.preventDefault()
    promotion_btn1.style.backgroundColor = "white";
    promotion_btn2.style.backgroundColor = "green";
}

function change_bgc_of_promitio() {
    promotion_btn1.addEventListener("click", changebgc1)
    promotion_btn2.addEventListener("click", changebgc2)
}
import { footer,footerPart2 } from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();

document.getElementById("lower").innerHTML=footerPart2();
