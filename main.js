var skill=document.querySelector("#tab-skills");
skill.addEventListener("click", function(){
    document.querySelector("#skills").style.display="block";
    document.querySelector("#experience").style.display="none";
    document.querySelector("#education").style.display="none";

})

var experience=document.querySelector("#tab-experience");
experience.addEventListener("click", function(){
    document.querySelector("#skills").style.display="none";
    document.querySelector("#experience").style.display="block";
    document.querySelector("#education").style.display="none";
})

var education=document.querySelector("#tab-education");
education.addEventListener("click", function(){
    document.querySelector("#skills").style.display="none";
    document.querySelector("#experience").style.display="none";
    document.querySelector("#education").style.display="block";
})

var sidemenu=document.querySelector("#sidemenu");

var close=document.querySelector(".fa-solid.fa-xmark");
close.addEventListener("click", function(){
    sidemenu.style.right = "-200px";
})

var menu=document.querySelector(".fa-solid.fa-bars");
menu.addEventListener("click", function(){
    sidemenu.style.right= "0";
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzftMCqlVC_fgzsnSowoFIawu3xOE3E4B_wusxZn8fj9UA-Z62zdSNgUYQIXmCC6iijqw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.textContent = "Message Sent";
            setTimeout(function(){
                msg.textContent = "";
            },5000)
            form.reset()
        })
    .catch(error => console.error('Error!', error.message))
})




