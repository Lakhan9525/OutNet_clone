let signup=()=>{
    return `<label for="">Email</label>
    <input type="email" , placeholder="Enter Email" id="s-email">
    <div class="s-point">
        <div id="s-pointer3"></div>
        <p>I'm already registered</p>
    </div>
    <div class="s-point">
        <div id="s-pointer2"></div>
        <p>I'm new to THE OUTNET</p>
    </div>
    <label for="">Password</label>
    <input type="text" name="" id="pass" placeholder="Create New Password">
    <label for="">First Name</label>
    <input type="text" placeholder="Enter First Name" id="s-fst-name">
    <label for="">Last Name</label>
    <input type="text" placeholder="Enter Last Name" id="s-lst-name">
    <div id="s-promotion">
        <p>Want to remain stylishly in the know? Please tick here to receive THE OUTNET's promotional
            emails.</p>
        <div class="s-point">
            <div id="s-pointer4"></div>
            <p>Yes please!</p>
        </div>
        <div class="s-point">
            <div id="s-pointer5"></div>
            <p>No thanks</p>
        </div>
    </div>
    <p>Find out more about our <a style="text-decoration: underline;" href="#">Privacy Policy</a></p>
    <button id="s-register">Register</button>`
}
export {signup};