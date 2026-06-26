// =============================
// Dark Mode Toggle
// =============================

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀️";
    }else{
        darkBtn.innerHTML = "🌙";
    }

});

// =============================
// Contact Form Validation
// =============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(email === ""){
        alert("Please enter your email.");
        return;
    }

    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// =============================
// Smooth Scroll
// =============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// =============================
// Reveal Animation
// =============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections(){

    const trigger = window.innerHeight * 0.80;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity="1";
            section.style.transform="translateY(0px)";

        }

    });

}

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s";

});

revealSections();


// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.padding="12px 16px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// =============================
// Typing Animation
// =============================

const titles = [

"Frontend Developer",

"Web Designer",

"JavaScript Developer",

"React Developer"

];

let index=0;
let charIndex=0;

const subtitle=document.querySelector(".home-text h2");

function type(){

    if(charIndex<titles[index].length){

        subtitle.textContent+=titles[index].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        subtitle.textContent=titles[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index>=titles.length){

            index=0;

        }

        setTimeout(type,300);

    }

}

subtitle.textContent="";

type();


// =============================
// Project Button Alert
// =============================

const projectBtns=document.querySelectorAll(".project-card button");

projectBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("Project Link Coming Soon!");

    });

});


// =============================
// Welcome Message
// =============================

window.onload=()=>{

    console.log("Portfolio Website Loaded Successfully.");

};
