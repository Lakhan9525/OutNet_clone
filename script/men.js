let data = [{ "thref": "https://www.theoutnet.com/en-in/shop/product/iro/jackets/leather-jackets/headon-leather-biker-jacket/1647597278442868", "isrc": "https://www.theoutnet.com/variants/images/1647597278442868/F/w250.jpg", "bl": "IRO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/knitwear/v-neck-sweaters/cotton-sweater/1647597279358347", "isrc": "https://www.theoutnet.com/variants/images/1647597279358347/F/w250.jpg", "bl": "PESERICO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/ermenegildo-zegna/jeans/skinny-leg-jeans/slim-fit-denim-jeans/45666037504656755", "isrc": "https://www.theoutnet.com/variants/images/45666037504656755/F/w250.jpg", "bl": "ERMENEGILDO ZEGNA" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/sneakers/fashion-sneakers/perforated-logo-print-leather-sneakers/1647597279368277", "isrc": "https://www.theoutnet.com/variants/images/1647597279368277/F/w250.jpg", "bl": "PESERICO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/vince/jackets/casual-jackets/checked-wool-and-cashmere-blend-overshirt/42247633208905142", "isrc": "https://www.theoutnet.com/variants/images/42247633208905142/F/w250.jpg", "bl": "VINCE." }, { "thref": "https://www.theoutnet.com/en-in/shop/product/npeal/knitwear/crew-neck-sweaters/cashmere-sweater/46376663162653232", "isrc": "https://www.theoutnet.com/variants/images/46376663162653232/F/w250.jpg", "bl": "N.PEAL" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/acne-studios/jeans/skinny-leg-jeans/skinny-fit-denim-jeans/36856120585125097", "isrc": "https://www.theoutnet.com/variants/images/36856120585125097/F/w250.jpg", "bl": "ACNE STUDIOS" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/helmut-lang/tops/hoodies-zip-throughs/logo-print-french-cotton-terry-hoodie/1647597277890715", "isrc": "https://www.theoutnet.com/variants/images/1647597277890715/F/w250.jpg", "bl": "HELMUT LANG" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/maison-margiela/flat-shoes/lace-ups/glossed-leather-brogues/1647597279232004", "isrc": "https://www.theoutnet.com/variants/images/1647597279232004/F/w250.jpg", "bl": "MAISON MARGIELA" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/iro/jackets/casual-jackets/tucker-cotton-blend-drill-track-jacket/1647597277974853", "isrc": "https://www.theoutnet.com/variants/images/1647597277974853/F/w250.jpg", "bl": "IRO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/dolce-gabbana/knitwear/crew-neck-sweaters/logo-embroidered-silk-t-shirt/1647597278486266", "isrc": "https://www.theoutnet.com/variants/images/1647597278486266/F/w250.jpg", "bl": "DOLCE & GABBANA" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/valentino/pants/tailored-pants/pleated-mohair-and-wool-blend-crepe-pants/1647597277894443", "isrc": "https://www.theoutnet.com/variants/images/1647597277894443/F/w250.jpg", "bl": "VALENTINO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/backpacks/backpacks/leather-trimmed-canvas-backpack/1647597279386796", "isrc": "https://www.theoutnet.com/variants/images/1647597279386796/F/w250.jpg", "bl": "PESERICO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/valentino/coats/raincoats-trench-coats/whipstitched-gabardine-trench-coat/1647597277306295", "isrc": "https://www.theoutnet.com/variants/images/1647597277306295/F/w250.jpg", "bl": "VALENTINO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/peserico/jackets/blazers/double-breasted-cotton-blend-canvas-blazer/1647597279350398", "isrc": "https://www.theoutnet.com/variants/images/1647597279350398/F/w250.jpg", "bl": "PESERICO" }, { "thref": "https://www.theoutnet.com/en-in/shop/product/vince/knitwear/turtleneck-sweaters/wool-and-cashmere-blend-hoodie/42247633208812930", "isrc": "https://www.theoutnet.com/variants/images/42247633208812930/F/w250.jpg", "bl": "VINCE." }];


import { footer, footerPart2 } from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

document.getElementById("lower").innerHTML = footerPart2();

import { slider } from "../components/slider.js";

slider(data);

let image1 = document.querySelector("#f-image-2");
let image2 = document.querySelector("#f-image-1");
image1.addEventListener("click", go_to_clothing_page);
image2.addEventListener("click", go_to_clothing_page);

function go_to_clothing_page(){
    localStorage.setItem("key","mens");
    window.location.href="clothing.html";
}

let toClothing=()=>{
    localStorage.setItem("key","mens");
    window.location.href="clothing.html";
}


document.querySelector(".cat1").addEventListener("click",toClothing);
document.querySelector(".cat2").addEventListener("click",toClothing);
document.querySelector(".cat3").addEventListener("click",toClothing);



document.querySelector(".carousel-cell").addEventListener("click",toClothing);

import {navbar} from "../components/navbar.js";
import { navbar_function } from "../components/navbar_function.js";;
document.querySelector("#navbar-start").innerHTML=navbar();
navbar_function();

let cursol_image=document.querySelectorAll("#crusol_image img");

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
console.log(cursol_image)