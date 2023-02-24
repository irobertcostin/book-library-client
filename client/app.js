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


        let student = { 

            first_name:first_name,
            last_name:last_name,
            email:email,
            age:age,
            password:pass

        }

            await addStudent(student);
            
    } else if(obj.classList.contains("login-modal-login-btn")){

        

        let email = document.getElementById("login-modal-email-input").value;
        let password = document.getElementById("login-modal-pass-input").value;
        
        let user = {
            email:email,
            password:password
        }


    

        await login(user)
        
        if(loggedInStudent!=""){
            contentDiv.innerHTML="";
            document.querySelector(".navbar").classList.remove("hidden");
            document.querySelector(".navbar-parent").innerHTML="";
            document.querySelector(".navbar-parent").appendChild(signOutElement());
            userObj = await getStudentByEmail(loggedInStudent);
            
            let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
            contentDiv.appendChild(accountModal(userObj));
            
            document.querySelector(".sign-out-element-div").insertBefore(signedIdInfoLabel(userObj.email),document.querySelector(".sign-out-btn"))
            populateAccountEnrolls(userEnrolls);
            
        }
        
    }

    else if(obj.classList.contains("sign-out-btn")){
        navibar.innerHTML="";
        navibar.innerHTML=loginTab();
        loggedInStudent="";
        userObj="";
        document.querySelector(".navbar").classList.add("hidden");
        contentDiv.innerHTML="";
        contentDiv.appendChild(marketing());
    }


    else if(obj.classList.contains("account-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(accountModal(userObj));
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
        // console.log(userEnrolls)
        populateAccountEnrolls(userEnrolls);
        
    }

    else if(obj.classList.contains("course-modal-enroll-btn")){

        let courseId=obj.parentNode.parentNode.id
        let userId=userObj.id;
        let created_at = new Date();

        let enrollment = {

            student_id:userId,
            course_id:+courseId,
            created_at:created_at

        }

        await addEnrollments(enrollment);

    } else if(obj.classList.contains("edit-account-info-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(studentModalEdit(userObj))
    }   else if(obj.classList.contains("save-info-account-btn")){

        let first=document.getElementById("student-edit-first-name").value;
        let last=document.getElementById("student-edit-last-name").value;
        let age=+document.getElementById("student-edit-age").value;


        console.log(first)
        console.log(last)
        console.log(age);

        let user = {

            first_name:first,  
            last_name:last,
            age:age
        }

        await editStudentApi(user,userObj.id)

        contentDiv.innerHTML="";
        userObj = await getStudentByEmail(loggedInStudent);
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
        // console.log(userEnrolls)
        contentDiv.appendChild(accountModal(userObj));
        populateAccountEnrolls(userEnrolls);

    }else if(obj.classList.contains("book-modal-edit-btn")){
        // console.log(obj.parentNode.parentNode);
        let book = await getBookByIdApi(obj.parentNode.parentNode.id)
        console.log(book)
        contentDiv.innerHTML="";
        contentDiv.appendChild(editBookModal(book));
    }

    

})


studentsBtn.addEventListener("click",(e)=>{

    console.log(userObj);
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
        

// add author to book modal 
// add other info account in account modal


// sign-up successfully to update
// master account for course add and edit and data management through client
// normal account with delete or enroll active 

// landing page cu snap scroll 

// cum putem ascunde parola din get user by ID 
// mesaje logare user 
// div user logat 
// div logout  - vaiabila loggedInUser=""
// landpage fara content, doar daca e logat, si optiunile
// add enrollment 
// cosmetizare erori
// make enrollment
// edit delete buttons with outline and hover transition
// sign out button 
// welcome after sign in 
// 