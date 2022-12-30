
let product_data = JSON.parse(localStorage.getItem("product_data"));
let key = localStorage.getItem("key");
let data = product_data.different_data;
switch (key) {
  case "mens":
    data = product_data.mens;
    break;
  case "womens":
    data = product_data.womens;
    break;
  case "shoes":
    data = product_data.shoes;
    break;
  case "jeans":
    data = product_data.jeans;
    break;
}

function showthediv(id) {
  if (document.querySelector(`#${id} ul`).style.display == "" || document.querySelector(`#${id} ul`).style.display == "none") {
    if (id == "z-size-shoe" || id == "z-size-shirt" || id == "z-size") {
      document.querySelector(`#${id} ul`).style.display = "grid"
    } else {
      document.querySelector(`#${id} ul`).style.display = "block"
    }
    for (let i = 0; i < alldiv.length; i++) {
      if (id !== alldiv[i].id) {
        document.querySelector(`#${alldiv[i].id} ul`).style.display = "none"
      }
    }
  } else {
    setTimeout(() => {
      document.querySelector(`#${id} ul`).style.display = "none"
    }, 2000);


  }


}
let alldiv = document.querySelectorAll("#z-sort-items>div")
for (let i = 0; i < alldiv.length; i++) {
  alldiv[i].addEventListener("click", function () {
    showthediv(this.id)
  })
}


const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = 0
    maxPrice = 3000

    if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / rangeInput[0].max)) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if ((maxVal - minVal) < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      document.querySelector("#z-min").innerText = `$${minVal}`;
      document.querySelector("#z-max").innerText = `$${maxVal}`;
      range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

function append(data) {
  document.querySelector("#z-showdata").innerHTML = null
  data.map((el) => {
    let div = document.createElement("div")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let span = document.createElement("span")
    let fp = document.createElement("h4")
    let sp = document.createElement("span")
    let off = document.createElement("span")
    let tag = document.createElement("span")
    let div1 = document.createElement("div")
    div1.setAttribute("class", "z-flex")
    img.src = el["Image18__image src"];
    img.addEventListener("mouseover",()=>{
      hoverred(img,el["Image18__image src 2"]);
    });
    img.addEventListener("mouseleave",()=>{
      mouse_leaved(img, el["Image18__image src"])
    })
    if(el.ProductItem24__designer!=null){
    h4.innerText = el.ProductItem24__designer
  }
    span.innerText = el.ProductItem24__name
    fp.innerText = el.PriceWithSchema9__value
    fp.style.color = "#B90000"
    fp.style.fontWeight = "500"
    sp.innerText = el.PriceWithSchema9__wasPrice
    sp.style.textDecoration = "line-through"
    off.innerText = el.PriceWithSchema9__discount
    tag.innerText = el.SingleBadge2__badge
    div1.append(sp, off)
    div.append(img, h4, span, fp, div1, tag)
    div.addEventListener("click",()=>{
      showonthepage(el)
    })
    document.querySelector("#z-showdata").append(div)

  })
  document.querySelector("#z-counter-div").innerText = `${data.length} results`
}

function hoverred(img,image_link){
  img.style.cursor="pointer"
   img.src=image_link;
}
function mouse_leaved(img,image_link){
  img.src=image_link;
}
function sortvalue(value) {
  if (value == null) {
    return
  }
  value = value.trim()
  value = value.split("")
  //  console.log(value)
  for (let i = 0; i < value.length; i++) {
    if (value[i] == "$" || value[i] == "," || value[i] == "o" || value == "f" || value == "f" || value == "%" || value == ' ') {
      value.splice(i, 1)
      i = 0
    }
  }
  if (value[5] == "f") {
    value = value.join("")
    let x = value[0] + value[1]
    return Number(x)
  }
  return Number(value.join(""))

}
append(data)
document.querySelector("#z-sort").addEventListener("change", function () {
  sortfun()
})


function sortfun() {
  let low = document.querySelector("#z-sort").value

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
  if (low == "hd") {
    data = data.sort((a, b) => {
      return sortvalue(b.PriceWithSchema9__discount) - sortvalue(a.PriceWithSchema9__discount)
    })
    append(data)
  }
}

function showonthepage(el){
  let arr=[]
  arr.push(el)
  localStorage.setItem("productpage",JSON.stringify(arr))
  window.location.href="productpage.html"
}