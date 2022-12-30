function navbar_function() {
    let one = document.querySelector("#justin").addEventListener("mouseover", () => {
        hoverred(1);
    });
    let two = document.querySelector("#best").addEventListener("mouseover", () => {
        hoverred(2);
    });
    let three = document.querySelector("#desgin").addEventListener("mouseover", () => {
        hoverred(3);
    });
    let four = document.querySelector("#cloth").addEventListener("mouseover", () => {
        hoverred(4);
    });
    let five = document.querySelector("#shoe").addEventListener("mouseover", () => {
        hoverred(5);
    });
    let six = document.querySelector("#accessor").addEventListener("mouseover", () => {
        hoverred(6);
    });
    let seven = document.querySelector("#spo").addEventListener("mouseover", () => {
        hoverred(7);
    });
    let eight = document.querySelector("#wardd").addEventListener("mouseover", () => {
        hoverred(8);
    });
    let nine = document.querySelector("#off70").addEventListener("mouseover", () => {
        hoverred(9);
    });
    let ten = document.querySelector("#edit").addEventListener("mouseover", () => {
        hoverred(10);
    });
    let a = document.querySelector(".s-just-in");
    a.addEventListener("mouseleave", () => {
        leaved(2)
    })
    let b = document.querySelector(".s-best-sellers");
    b.addEventListener("mouseleave", () => {
        leaved(3)
    })
    let c = document.querySelector(".s-desginer");
    c.addEventListener("mouseleave", () => {
        leaved(4)
    })
    let d = document.querySelector(".s-clothing");
    d.addEventListener("mouseleave", () => {
        leaved(5)
    })
    let e = document.querySelector(".s-shoes");
    e.addEventListener("mouseleave", () => {
        leaved(6)
    })
    let f = document.querySelector(".s-access");
    f.addEventListener("mouseleave", () => {
        leaved(7)
    })
    let g = document.querySelector(".s-sport");
    g.addEventListener("mouseleave", () => {
        leaved(8)
    })
    let h = document.querySelector(".s-warddrop");
    h.addEventListener("mouseleave", () => {
        leaved(9)
    })
    let i = document.querySelector(".s-off");
    i.addEventListener("mouseleave", () => {
        leaved(10)
    })
    let j = document.querySelector(".s-editorial");
    j.addEventListener("mouseleave", () => {
        leaved(1)
    })
    let signup_signin=document.querySelector("#s-signup-login");
    signup_signin.addEventListener("mouseover", () => {
        leaved(10);
    })
    let body = document.querySelector("#s-middle");
    body.addEventListener("mouseover", () => {
        leaved(10);
    })
    let border = document.querySelector("#s-nav_btn");

    function hoverred(value) {
        border.style.borderBottom = "none"
        switch (value) {
            case 1:
                a.style.display = "flex"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 2:
                a.style.display = "none"
                b.style.display = "flex"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 3:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "flex"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 4:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "flex"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 5:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "flex"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 6:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "flex"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 7:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "flex"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 8:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "flex"
                i.style.display = "none"
                j.style.display = "none"
                break;
            case 9:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "flex"
                j.style.display = "none"
                break;
            case 10:
                a.style.display = "none"
                b.style.display = "none"
                c.style.display = "none"
                d.style.display = "none"
                e.style.display = "none"
                f.style.display = "none"
                g.style.display = "none"
                h.style.display = "none"
                i.style.display = "none"
                j.style.display = "flex"
                break;

        }

    }

    function leaved(value) {
        border.style.borderBottom = "1px solid gray"
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"
        h.style.display = "none"
        i.style.display = "none"
        j.style.display = "none"
    }
    let s_search = document.querySelector("#s_search");
    s_search.addEventListener("click", search_fun);

    function search_fun() {
        let serach_box = document.querySelector("#s-search-box");
        serach_box.style.display = "block";
    }
    let cut = document.querySelector("#s-cut");
    cut.addEventListener("click", cutthebox);

    function cutthebox() {
        let serach_box = document.querySelector("#s-search-box");
        serach_box.style.display = "none";
    }
    let query = document.querySelector("#s-query");
    query.addEventListener("keypress", user_input);

    function user_input(event) {
        let value = query.value;
        if (event.key == "Enter") {
            localStorage.setItem("key", value);
            window.location.href = "clothing.html";
        }
    }

    function main() {
        user_input();
    }
    let id;

    function debaunce() {
        clearTimeout(id);
        id = setTimeout(() => {
            main();
        }, 1000);
    }
    let user_sing_in_data = JSON.parse(localStorage.getItem("signed"));
    let display_data = document.querySelector("#sign-in");
    if (user_sing_in_data != null) {
        display_data.innerText = user_sing_in_data.first_name;
    }

    function go_to_cart() {
        window.location.href = "cart.html"
    }
    let number_of_items = document.querySelector("#lblCartCount");
    let cart_data_length = JSON.parse(localStorage.getItem("cart_data"));
    number_of_items.innerText = cart_data_length.length;
}

export {
    navbar_function
}