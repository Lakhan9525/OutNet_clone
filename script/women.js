let data = [{
    "thref": "",
    "isrc": "https://www.theoutnet.com/variants/images/42247633209088995/F/w250.jpg",
    "bl": "STELLA JEAN"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/givenchy/sunglasses/square-frame/hexagon-frame-crystal-embellished-gold-tone-sunglasses/20346390236093816",
    "isrc": "https://www.theoutnet.com/variants/images/20346390236093816/F/w250.jpg",
    "bl": "GIVENCHY"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/ermenegildo-zegna/jeans/skinny-leg-jeans/slim-fit-denim-jeans/45666037504656755",
    "isrc": "https://www.theoutnet.com/variants/images/46376663162466475/F/w250.jpg",
    "bl": "CAMILLA"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/sneakers/fashion-sneakers/perforated-logo-print-leather-sneakers/1647597279368277",
    "isrc": "https://www.theoutnet.com/variants/images/1647597282740938/F/w250.jpg",
    "bl": "DORA "
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/vince/jackets/casual-jackets/checked-wool-and-cashmere-blend-overshirt/42247633208905142",
    "isrc": "https://www.theoutnet.com/variants/images/42247633209143028/F/w250.jpg",
    "bl": "STELLA JEAN"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/npeal/knitwear/crew-neck-sweaters/cashmere-sweater/46376663162653232",
    "isrc": "https://www.theoutnet.com/variants/images/1647597278806255/F/w250.jpg",
    "bl": "DKNY"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/acne-studios/jeans/skinny-leg-jeans/skinny-fit-denim-jeans/36856120585125097",
    "isrc": "https://www.theoutnet.com/variants/images/38063312417942969/F/w250.jpg",
    "bl": "LOVE MOSCHINO"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/helmut-lang/tops/hoodies-zip-throughs/logo-print-french-cotton-terry-hoodie/1647597277890715",
    "isrc": "https://www.theoutnet.com/variants/images/45666037505032990/F/w250.jpg",
    "bl": "BA&SH"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/maison-margiela/flat-shoes/lace-ups/glossed-leather-brogues/1647597279232004",
    "isrc": "https://www.theoutnet.com/variants/images/46376663162469176/F/w250.jpg",
    "bl": "CAMILLA"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/iro/jackets/casual-jackets/tucker-cotton-blend-drill-track-jacket/1647597277974853",
    "isrc": "https://www.theoutnet.com/variants/images/43769801094612557/F/w250.jpg",
    "bl": "STELLA JEAN"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/dolce-gabbana/knitwear/crew-neck-sweaters/logo-embroidered-silk-t-shirt/1647597278486266",
    "isrc": " https://www.theoutnet.com/variants/images/1647597276828208/F/w250.jpg",
    "bl": "VANESSA BRUNO"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/pleated-mohair-and-wool-blend-crepe-pants/1647597277894443",
    "isrc": "https://www.theoutnet.com/variants/images/45666037505175682/F/w250.jpg",
    "bl": "ASPESI"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/givenchy/sunglasses/square-frame/hexagon-frame-crystal-embellished-gold-tone-sunglasses/20346390236093816",
    "isrc": "https://www.theoutnet.com/variants/images/20346390236093816/F/w250.jpg",
    "bl": "GIVENCHY"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/ermenegildo-zegna/jeans/skinny-leg-jeans/slim-fit-denim-jeans/45666037504656755",
    "isrc": "https://www.theoutnet.com/variants/images/46376663162466475/F/w250.jpg",
    "bl": "CAMILLA"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/sneakers/fashion-sneakers/perforated-logo-print-leather-sneakers/1647597279368277",
    "isrc": "https://www.theoutnet.com/variants/images/1647597282740938/F/w250.jpg",
    "bl": "DORA "
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/vince/jackets/casual-jackets/checked-wool-and-cashmere-blend-overshirt/42247633208905142",
    "isrc": "https://www.theoutnet.com/variants/images/42247633209143028/F/w250.jpg",
    "bl": "STELLA JEAN"
}, {
    "thref": "https://www.theoutnet.com/en-in/shop/product/npeal/knitwear/crew-neck-sweaters/cashmere-sweater/46376663162653232",
    "isrc": "https://www.theoutnet.com/variants/images/1647597278806255/F/w250.jpg",
    "bl": "DKNY"
}];


import { footer, footerPart2} from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("lower").innerHTML = footerPart2();

import {slider} from "../components/slider.js";

slider(data);
let iamge1 = document.querySelector("#m-image-2");
let image2 = document.querySelector("#m-image-1");
iamge1.addEventListener("click", go_to_clothing_page);
image2.addEventListener("click", go_to_clothing_page);

function go_to_clothing_page() {
    localStorage.setItem("key", "womens");
    window.location.href = "clothing.html"
}

let toClothing = () => {
    localStorage.setItem("key", "womens");
    window.location.href = "clothing.html";
}

document.querySelector(".mcat1").addEventListener("click", toClothing);
document.querySelector(".mcat2").addEventListener("click", toClothing);
document.querySelector(".mcat3").addEventListener("click", toClothing);


document.querySelector(".carousel-cell").addEventListener("click", toClothing);

import { navbar } from "../components/navbar.js";
import { navbar_function } from "../components/navbar_function.js";;
document.querySelector("#navbar-start").innerHTML = navbar();
navbar_function();
setTimeout(()=>{

let cursol_image=document.querySelectorAll("#cursol_image img");
cursol_image.forEach(element => {
    element.addEventListener("mouseover", () => {
        hover(element, element.src);
    });
    element.addEventListener("mouseleave", () => {
        mouse_lea(element, element.src)
    })
});

function hover(img, image_link) {
    img.style.cursor = "pointer"
    let new_link="";
    for(let i=0;i<image_link.length;++i){
        if(image_link[i]=="F"){
            new_link=new_link+"R";
        }else{
            new_link=new_link+image_link[i];
        }
       
    }
    img.src=new_link;
}

function mouse_lea(img, image_link) {
    let new_link="";
    for(let i=0;i<image_link.length;++i){
        if(image_link[i]=="R"){
            new_link=new_link+"F";
        }else{
            new_link=new_link+image_link[i];
        }
       
    }
    img.src=new_link;
}
},1000)