let main = document.querySelector(".main");


let navibar = document.querySelector(".navbar-parent")
navibar.innerHTML=loginTab();


let menu = document.querySelector(".menu-div")
menu.innerHTML=navbar();

let contentDiv = document.querySelector(".content-div")
contentDiv.appendChild(marketing())


let studentsBtn = document.querySelector(".students-btn")
let booksBtn = document.querySelector(".books-btn")
let coursesBtn = document.querySelector(".courses-btn")
let enrollsBtn = document.querySelector(".enrolls-btn")

main.addEventListener("click",(e)=>{

    let obj = e.target
    let landImg=document.querySelector(".land-img")
   
    
    if(obj.classList.contains("logo-img")){
        document.querySelector(".content-div").innerHTML="";
        document.querySelector(".content-div").appendChild(marketing());
    }
})


studentsBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    let contentDiv = document.querySelector(".content-div");
    contentDiv.innerHTML="";
    contentDiv.appendChild(divForStudents());
    populateDivForStudents()


})

booksBtn.addEventListener("click",async (e)=>{

    let obj=e.target;

    let contentDiv = document.querySelector(".content-div");
    contentDiv.innerHTML="";
    contentDiv.appendChild(divForBooks());
    populateDivForBooks();



})

coursesBtn.addEventListener("click",async (e)=>{

    let obj=e.target;

    let contentDiv = document.querySelector(".content-div");
    contentDiv.innerHTML="";
    contentDiv.appendChild(divForCourses());
    populateDivForCourses()

})

enrollsBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    let contentDiv = document.querySelector(".content-div");
    contentDiv.innerHTML="";
    contentDiv.appendChild(divForEnrollments());
    populateDivForEnrollments()

})