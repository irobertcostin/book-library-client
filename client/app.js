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
        
    } else if(obj.classList.contains("signup-modal-signup-btn")){
        
        let first_name=document.getElementById("signup-modal-first-name-input").value;
        let last_name=document.getElementById("signup-modal-last-name-input").value;
        let email=document.getElementById("signup-modal-email-input").value;
        let age=document.getElementById("signup-modal-age-name-input").value;
        let pass=document.getElementById("signup-modal-pass-input").value;

        if(first_name!=""&&last_name!=""&&email!=""&&age!=""&&pass!=""){
            
            let student = { 

                first_name:first_name,
                last_name:last_name,
                email:email,
                age:age,
                pass:pass

            }

            await addStudent(student);

        } else{
            alert("Empty fields")
        }
        
    } else if(obj.classList.contains("login-modal-login-btn")){

        

        let email = document.getElementById("login-modal-email-input").value;
        let password = document.getElementById("login-modal-pass-input").value;
        
        let user = {
            email:email,
            password:password
        }

        console.log(user)

        let response =  await login(user)
        console.log(response)
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



// mesaje logare user 
// div user logat 
// div logout  - vaiabila loggedInUser=""
// landpage fara content, doar daca e logat, si optiunile
// add enrollment 
// cosmetizare erori