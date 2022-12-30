
    document.querySelector("form").addEventListener("submit", cardSubmit);
    // document.querySelector("#total").innerHTML = Total price is ₹${total}, Please Enter Card Details.;
    function cardSubmit() {
        event.preventDefault();
        var enteredNum = document.querySelector("#cardNum").value;
        var enteredName = document.querySelector("#name").value;
        var enteredDate = document.querySelector("#date").value;
        // console.log(date);
        var enteredCvv = document.querySelector("#cvv").value;

        var cardNum = enteredNum.trim().split("");
        console.log(cardNum);
        if (cardNum.length != 16) {
            alert("Please enter 16 digit card number")
        }
        var cvvNum = enteredCvv.trim().split("");
        if (cvvNum.length != 3) {
            alert("Please enter 3 digit cvv number")
        }
        var dateArr = enteredDate.trim().split("-").map(Number);
        var year = dateArr[0] - 2022;
        if (year < 0) {
            alert("Please enter a valid expiry date")
        }
        if (cardNum.length == 16 && cvvNum.length == 3 && year >= 0) {
            window.location.href = "finalpage.html"
        }
        //  console.log(dateArr[0]);


    }


