let main = document.querySelector(".main")
main.innerHTML=navbar();
main.innerHTML+=loginTab();

main.appendChild(divForBooks());
populateDivForBooks();

main.appendChild(divForCourses());
populateDivForCourses();


