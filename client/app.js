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

    console.log(obj)


})

booksBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    console.log(obj)


})

coursesBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    console.log(obj)


})

enrollsBtn.addEventListener("click",(e)=>{

    let obj=e.target;

    console.log(obj)


})