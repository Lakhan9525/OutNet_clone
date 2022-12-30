let slider=(data)=>{
    data.map(({isrc,bl})=>{
        let d3=document.createElement("div");
        d3.setAttribute("class","carousel-cell")
        let img=document.createElement("img");
        img.setAttribute("class","carousel-cell-image")
        img.setAttribute("data-flickity-lazyload",isrc);
        let h4=document.createElement("h4");
        h4.innerText=bl;
        d3.append(img,h4);
        document.querySelector(".carousel").append(d3);

    });
}

export {slider};

// {/* <div class="carousel"
//    data-flickity='{ "lazyLoad": true }'>
//   <div class="carousel-cell">
//     <img class="carousel-cell-image"
//       data-flickity-lazyload="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/tulip.jpg" alt="tulip" />
// //   </div> */}