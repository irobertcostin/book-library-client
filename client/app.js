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

main.addEventListener("click",async(e)=>{

    let obj = e.target
    let landImg=document.querySelector(".land-img")
   
    
    if(obj.classList.contains("logo-img")){
        document.querySelector(".content-div").innerHTML="";
        document.querySelector(".content-div").appendChild(marketing());
    }else if(obj.classList.contains("book-modal-del-btn")){
        await deleteBook(obj.parentNode.parentNode.id);
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForBooks());
        populateDivForBooks();
        
    }else if(obj.classList.contains("student-modal-del-btn")){
        // console.log(obj.parentNode.parentNode.id)
        await deleteStudent(obj.parentNode.parentNode.id);
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForStudents());
        populateDivForStudents();
        
    }
    else if(obj.classList.contains("course-modal-del-btn")){
        // console.log(obj.parentNode.parentNode.id)
        await deleteCourse(obj.parentNode.parentNode.id);
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForCourses());
        populateDivForCourses();
        
    }else if(obj.classList.contains("enrollment-modal-del-btn")){
        // console.log(obj.parentNode.parentNode.id)
        await deleteEnrollment(obj.parentNode.parentNode.id);
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForEnrollments());
        populateDivForEnrollments();
        
    }else if(obj.classList.contains("enrollment-modal-details-btn")){
        // console.log(obj.parentNode.parentNode.id)
        let enroll = await getEnrollmentById(obj.parentNode.parentNode.id);
        let student = await getStudentById(enroll.student_id);
        let course = await getCourseById(enroll.course_id);



        // console.log(enroll)
        // console.log(student)
        contentDiv.innerHTML="";
        contentDiv.appendChild(createEnrollmentExtended(enroll,student,course));
        
        
    }else if(obj.classList.contains("extended-enrollment-modal-close-btn")){
        // console.log(obj)
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForEnrollments());
        populateDivForEnrollments();
    }else if(obj.classList.contains("extended-enrollment-modal-edit-btn")){
        // console.log(obj)
        
    }else if(obj.classList.contains("extended-enrollment-modal-edit-btn")){
        console.log(obj)
        
    }else if(obj.classList.contains("login-navbar-btn")){
        // console.log(obj)
        contentDiv.innerHTML="";
        contentDiv.appendChild(createLoginMask())
    }
    else if(obj.classList.contains("signup-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(createSignupMask());
        
    }else if(obj.id=="signup-modal-reg-label"){
        contentDiv.innerHTML="";
        contentDiv.appendChild(createLoginMask());
        console.log(obj)
        
    }else if(obj.id=="login-modal-reg-label"){
        contentDiv.innerHTML="";
        contentDiv.appendChild(createSignupMask());
        console.log(obj)
    }else if(obj.classList.contains("login-modal-close-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(marketing())
    }
    else if(obj.classList.contains("signup-modal-close-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(marketing())
        
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


// contentDiv.innerHTML="";
// contentDiv.appendChild(createLoginMask())
// contentDiv.appendChild(createSignupMask())
// createLoginMask();