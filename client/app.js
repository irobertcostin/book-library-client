let navibar = document.querySelector(".navbar-parent")
navibar.innerHTML=loginTab();


let menu = document.querySelector(".menu-div")
menu.innerHTML=navbar();


let studentsBtn = document.querySelector(".students-btn")
let booksBtn = document.querySelector(".books-btn")
let coursesBtn = document.querySelector(".courses-btn")
let enrollsBtn = document.querySelector(".enrolls-btn")


studentsBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    


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