import {
  footer,
  footerPart2
} from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

document.getElementById("lower").innerHTML = footerPart2();

// wishlist data from product page

let data = JSON.parse(localStorage.getItem("wishlist")) || [];
let noOfItem = document.getElementById("noitem");
noOfItem.innerText = `${data.length} Item`;


function sortvalue(value) {
  if (value == null) {
    return
  }

  value = value.trim()
  value = value.split("")

  for (let i = 0; i < value.length; i++) {
    while (value[i] == "$") {
      value.splice(i, 1);
    }
  }
  let bag = "";
  for (let j = 0; j < value.length; j++) {
    bag = bag + value[j];
  }
  return Number(bag);

}



function sortPrice() {
  let low = document.querySelector("#sort").value

  if (low == "lth") {
    data = data.sort((a, b) => {
      return sortvalue(a.PriceWithSchema9__value) - sortvalue(b.PriceWithSchema9__value)
    })
    append(data)
  }
  if (low == "htl") {
    data = data.sort((a, b) => {
      return sortvalue(b.PriceWithSchema9__value) - sortvalue(a.PriceWithSchema9__value)
    })
    append(data)
  }

}








document.getElementById("sort").addEventListener("change", sortPrice);









let append = (data) => {
  document.getElementById("container").innerHTML = null;
  data.map((ele, index) => {

    let div = document.createElement("div");
    div.setAttribute("id", "box")
    let d1 = document.createElement("div");
    d1.setAttribute("id", "detailBox")
    let img = document.createElement("img");
    img.src = ele["Image18__image src"];

    img.addEventListener("mouseover", () => {
      hoverred(img, ele["Image18__image src 2"]);
    });
    img.addEventListener("mouseleave", () => {
      mouse_leaved(img, ele["Image18__image src"])
    })
    let design = document.createElement("h2");
    design.innerText = ele.ProductItem24__designer;
    let name = document.createElement("p");
    name.innerText = ele.ProductItem24__name;
    let strPrice = document.createElement("p");
    strPrice.setAttribute("class", "strPrice");
    strPrice.innerText = ele.PriceWithSchema9__wasPrice;
    let discount = document.createElement("p");
    discount.innerText = ele.PriceWithSchema9__discount;



    let price = document.createElement("p");
    price.setAttribute("id", "finalPrice");

    let finalPrice = ele.PriceWithSchema9__value.trim().split("");
    for (let i = 0; i < finalPrice.length; i++) {
      while (finalPrice[i] == "$") {
        finalPrice.splice(i, 1);
      }
    }
    let bag = "";
    for (let j = 0; j < finalPrice.length; j++) {
      bag = bag + finalPrice[j];
    }
    price.innerText = `$${Number(bag)}`;

    price.style.color = "red";
    price.style.fontSize = "25px";
    let badge = document.createElement("p");
    badge.innerText = ele.SingleBadge2__badge;

    let addtoBag = document.createElement("button");
    addtoBag.setAttribute("id", "toBag");
    addtoBag.innerText = "Add to Bag";
    addtoBag.addEventListener("click", () => {
      addtobag();
    })

    let remove = document.createElement("i");
    remove.setAttribute("class", "fa-solid fa-xmark");
    remove.setAttribute("id", "remove");
    remove.addEventListener("click", () => {
      removeData(ele, index);
    })



    d1.append(design, name, price, strPrice, discount, badge, addtoBag);
    div.append(remove, img, d1)
    document.getElementById("container").append(div);

  })
}
append(data)

function hoverred(img, image_link) {
  img.style.cursor = "pointer"
  img.src = image_link;
}

function mouse_leaved(img, image_link) {
  img.src = image_link;
}

// Image18__image src
// ProductItem24__name
// PriceWithSchema9__wasPrice
// PriceWithSchema9__discount
// PriceWithSchema9__value
// SingleBadge2__badge

let removeData = ((ele, index) => {
  data.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(data));
  let data1 = JSON.parse(localStorage.getItem("wishlist"));
  append(data1);
  window.location.reload();
});

let addtobag = () => {
  window.location.href = "cart.html";
}