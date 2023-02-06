const formCollector = document.getElementById("form");
const email = document.getElementById("email");
const infoParagraph = document.querySelector(".paragraph--main")
const emptyEmail = document.querySelector(".empty-email");
const incorrectEmail = document.querySelector(".incorrect-email");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function formCollectorSubmitted(e) {
    console.log("Hello")    
    e.preventDefault();

    email.removeAttribute("required")
    if(email.value == 0) {
        emptyEmail.style.display = "inherit";
    } else if(!emailRegExp.test(email.value)) {
        incorrectEmail.style.display = "inherit";
        emptyEmail.style.display = "none";
    } else {
        incorrectEmail.style.display = "none";
        emptyEmail.style.display = "none";
        // infoMainText.textContent = `Thank You`
        // // infoParagraph.textContent = `We appreciate you signing up. You will be the first to know about new releases, giveaways & special projects. Stay tuned!`;
        // infoParagraph.style.margin = "1em 3em 11em 0em"
        // formCollector.style.display = "none";
    }

}

formCollector.addEventListener("submit", formCollectorSubmitted)