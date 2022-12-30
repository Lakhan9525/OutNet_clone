import {
    navbar
} from "../components/navbar.js";
import {
    navbar_function
} from "../components/navbar_function.js";;
document.querySelector("#navbar-start").innerHTML = navbar();
navbar_function();
import {
    footer,
    footerPart2
} from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("lower").innerHTML = footerPart2();

let from_local = JSON.parse(localStorage.getItem("cart_data"));
console.log(from_local);

function display(data, repetation) {
    numberOfProduct();
    let i = 0;
    let append_div = document.querySelector("#s-product-details");
    append_div.innerHTML = null;
    let number_of_product = 0;
    repetation.map((ele) => {
        number_of_product = number_of_product + ele;
    })
    document.querySelector("#s-counter").innerText = number_of_product;
    data.map((ele) => {
        let main_div = document.createElement("div");
        main_div.setAttribute("class", "product_div")
        let img_div = document.createElement("div");
        img_div.setAttribute("class", "image")
        let image = document.createElement("img");
        image.src = ele["Image18__image src"];
        image.addEventListener("mouseover",()=>{
            hoverred(image,ele["Image18__image src 2"]);
          });
          image.addEventListener("mouseleave",()=>{
            mouse_leaved(image, ele["Image18__image src"])
          })
        img_div.append(image);
        let detail_div = document.createElement("div");
        detail_div.setAttribute("class", "product_detaild");
        let name = document.createElement("p");
        name.style.fontSize = "20px"
        name.setAttribute("class", "s-name");
        name.innerText = ele.SingleBadge2__badge;
        let discription = document.createElement("p");
        discription.innerText = ele.ProductItem24__name;
        detail_div.append(name, discription);
        let size_div = document.createElement("div");
        size_div.setAttribute("Class", "size_and_color");
        let color = document.createElement("p");
        color.innerText = "Charcol";
        let size = document.createElement("p");
        size.innerText = "32";
        size_div.append(color, size);
        let price = document.createElement("p");
        price.style.color = "red";
        price.setAttribute("class", "price");
        let strike_div = document.createElement("div")
        price.innerText = ele.PriceWithSchema9__value;
        let strike_price = document.createElement("p");
        strike_div.setAttribute("class", "strike_div");
        strike_price.setAttribute("class", "strike_price");
        strike_price.innerText = ele.PriceWithSchema9__wasPrice;
        let discount = document.createElement("p");
        discount.innerText = ele.PriceWithSchema9__discount
        strike_div.append(strike_price, discount);
        let button = document.createElement("div");
        button.setAttribute("class", "button")
        let inc_dec_btn = document.createElement("div");
        inc_dec_btn.setAttribute("class", "inc_dec_btn");
        let decrement_btn = document.createElement("div");
        decrement_btn.setAttribute("class", "decrement_btn");
        if (repetation[i] > 1) {
            decrement_btn.addEventListener("click", () => {
                dcrenment(ele);
            })
        } else {
            decrement_btn.style.color = "gray";
        }
        let i1 = document.createElement("i");
        i1.setAttribute("class", "fa-solid fa-minus");
        decrement_btn.append(i1);
        let counter2 = document.createElement("div");
        counter2.style.border = "none"
        let counter2_text = document.createElement("p");
        counter2_text.innerText = repetation[i];
        counter2.append(counter2_text);
        let increment_btn = document.createElement("div");
        increment_btn.addEventListener("click", () => {
            increment(ele);
        })
        increment_btn.setAttribute("class", "increment_btn")
        let i2 = document.createElement("i");
        increment_btn.append(i2);
        i2.setAttribute("class", "fa-solid fa-plus");
        inc_dec_btn.append(decrement_btn, counter2, increment_btn);
        let wish_and_delet_btn = document.createElement("div");
        wish_and_delet_btn.setAttribute("class", "wish_and_delet_btn");
        let delete_btn = document.createElement("i");
        delete_btn.setAttribute("class", "fa-solid fa-trash");
        delete_btn.addEventListener("click", () => {
            deleted(ele);
        })
        let wish_btn = document.createElement("i");
        wish_btn.setAttribute("class", "fa-solid fa-heart");
        wish_btn.addEventListener("click", () => {
            add_to_wish_list(ele);
        });
        wish_and_delet_btn.append(delete_btn, wish_btn);
        button.append(inc_dec_btn, wish_and_delet_btn);
        detail_div.append(name, discription, size_div, price, strike_div, button);
        main_div.append(img_div, detail_div);
        append_div.append(main_div);
        ++i //for showing repetation of product;
    })
}

function hoverred(img,image_link){
    img.style.cursor="pointer"
    img.src=image_link;
  }
  function mouse_leaved(img,image_link){
    img.src=image_link;
  }

function unique(data) {
    let uniq_data = [];
    for (let i = 0; i < data.length; ++i) {
        let count = 0;
        for (let j = 0; j < uniq_data.length; ++j) {
            if (data[i].ProductItem24__name == uniq_data[j].ProductItem24__name) {
                ++count;
            }
        }
        if (count == 0) {
            uniq_data.push(data[i]);
        }
    }

    let repetation = [];
    for (let i = 0; i < uniq_data.length; ++i) {
        let count = 0;
        for (let j = 0; j < data.length; ++j) {
            if (uniq_data[i].ProductItem24__name == data[j].ProductItem24__name) {
                ++count;
            }
        }
        // console.log(uniq_data[i].ProductItem24__name)
        repetation.push(count);
    }
    display(uniq_data, repetation);
}
unique(from_local);

function dcrenment(ele) {
    event.preventDefault();
    let new_data = []; //after removing;
    let update_data = JSON.parse(localStorage.getItem("cart_data"));
    let count = 0;
    for (let i = 0; i < update_data.length; ++i) {
        if (ele.ProductItem24__name == update_data[i].ProductItem24__name) {
            ++count;
        }
        if (count != 1) {
            new_data.push(update_data[i]);
        }
    }
    localStorage.setItem("cart_data", JSON.stringify(new_data));
    new_data = JSON.parse(localStorage.getItem("cart_data"));
    display_payment(update_data);
    unique(new_data)
    // localStorage.setItem("cart_data", JSON.stringify(update_data));
}

function increment(ele) {
    event.preventDefault();
    let update_data = JSON.parse(localStorage.getItem("cart_data"));
    update_data.push(ele);
    localStorage.setItem("cart_data", JSON.stringify(update_data));
    display_payment(update_data);
    unique(update_data)
}

function deleted(ele) {
    event.preventDefault();
    let new_data = []; //after removing;
    let update_data = JSON.parse(localStorage.getItem("cart_data"));
    let count = 0;
    for (let i = 0; i < update_data.length; ++i) {
        if (ele.ProductItem24__name != update_data[i].ProductItem24__name) {
            new_data.push(update_data[i]);
        }
    }
    localStorage.setItem("cart_data", JSON.stringify(new_data));
    new_data = JSON.parse(localStorage.getItem("cart_data"));
    display_payment(update_data);
    unique(new_data);
    // localStorage.setItem("cart_data", JSON.stringify(update_data));
}

let input_box_btn = document.querySelector("#s-show_input_box");
let up_arrow = document.querySelector("#s-show_input_box2");
input_box_btn.addEventListener("click", show_input_box);
up_arrow.addEventListener("click", show_input_box);
let i = 0;

function show_input_box() {
    event.preventDefault();
    if (i % 2 == 0) {
        let input_box = document.querySelector("#s-input_promo");
        input_box.style.display = "flex";
        input_box_btn.style.display = "none";
        up_arrow.style.display = "flex";
    } else {
        let input_box = document.querySelector("#s-input_promo");
        input_box.style.display = "none";
        input_box_btn.style.display = "flex";
        up_arrow.style.display = "none";
    }
    ++i;
}

function display_payment(data, key) {
    let sub_total = document.querySelector("#sub_total");
    let final_price = 0;
    data.map((ele) => {
        let price = 0;
        for (let i = 1; i < ele.PriceWithSchema9__value.length; ++i) {
            price = price + ele.PriceWithSchema9__value[i];
        }
        final_price = final_price + Number(price.trim());
    })
    let total = Number(final_price) + 25 + 37.5;
    if (key == 1) {
        var dis = final_price * (30 / 100);
        total = total - dis;
        let discount = document.querySelector("#s-discount");
        discount.innerText = "$" + dis;
    }
    sub_total.innerText = "$" + final_price;
    let totalprice = document.querySelector("#total");
    totalprice.innerText = "$" + total;
    localStorage.setItem("total_price", total);
}

display_payment(from_local, 0);

let coupan_btn = document.querySelector("#apply_coupan");
coupan_btn.addEventListener("click", apply_coupan);

function apply_coupan() {
    event.preventDefault();
    let user_input = document.querySelector("#user_input").value;
    let discount_coupan = JSON.parse(localStorage.getItem("discount_coupan"));
    let check = document.querySelector("#s-discount");
    if (check.innerText != "00") {
        alert("You have already apply one coupan")
    } else {
        for (let i = 0; i < discount_coupan.length; ++i) {
            if (user_input == discount_coupan[i]) {
                let data = JSON.parse(localStorage.getItem("cart_data"));
                display_payment(data, 1);
                break;
            }
        }
    }
    user_input.innerText = "";
}


function add_to_wish_list(ele){
    event.preventDefault();
    let wish_list_data=JSON.parse(localStorage.getItem("wishlist"));
    wish_list_data.push(ele);
    localStorage.setItem("wishlist",JSON.stringify(wish_list_data));
    alert("Added To Wishlist");
    deleted(ele)
}
function numberOfProduct(){
    let number_of_prodtct=document.querySelector("#lblCartCount");
    let data=JSON.parse(localStorage.getItem("cart_data"))
    number_of_prodtct.innerText=data.length;
}
numberOfProduct();
let discount_coupan = ["satyam30", "Mahesh30", "faisal30", "sanjay30", "lakhan30"];
localStorage.setItem("discount_coupan", JSON.stringify(discount_coupan));