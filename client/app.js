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
        contentDiv.appendChild(accountModal(userObj));
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
            
            if(userEnrolls!=undefined){
                populateAccountEnrolls(userEnrolls);
            }
            

        
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
        contentDiv.appendChild(accountModal(userObj));
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
            
            if(userEnrolls!=undefined){

                populateAccountEnrolls(userEnrolls);
            }
            



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
        
        
    }else if(obj.id=="login-modal-reg-label"){
        contentDiv.innerHTML="";
        contentDiv.appendChild(createSignupMask());
        
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
            
            
            contentDiv.appendChild(accountModal(userObj));
            let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
            if(userEnrolls!=undefined){

                populateAccountEnrolls(userEnrolls);
            }
            document.querySelector(".sign-out-element-div").insertBefore(signedIdInfoLabel(userObj.email),document.querySelector(".sign-out-btn"))
            
            
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
        
        if(userEnrolls!=undefined){

            populateAccountEnrolls(userEnrolls);
        }
        
    }

    else if(obj.classList.contains("course-modal-enroll-btn")&&obj.textContent!=="Enrolled"){

        let courseId=obj.parentNode.parentNode.id
        let userId=userObj.id;
        let created_at = new Date();

        let enrollment = {

            student_id:userId,
            course_id:+courseId,
            created_at:created_at

        }

        await addEnrollments(enrollment);
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForCourses());
        populateDivForCourses()
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);

    
    for(let i=0;i<userEnrolls.length;i++){
        
        document.getElementById(`${userEnrolls[i].course_id}`).firstElementChild.firstElementChild.textContent="Enrolled"
        document.getElementById(`${userEnrolls[i].course_id}`).firstElementChild.firstElementChild.classList.add("enrolled-label")
    }

    document.querySelector(".div-for-courses").appendChild(enrollmentBtnLabel());

        
    

    } else if(obj.classList.contains("edit-account-info-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(studentModalEdit(userObj))
    }   else if(obj.classList.contains("save-info-account-btn")){

        let first=document.getElementById("student-edit-first-name").value;
        let last=document.getElementById("student-edit-last-name").value;
        let age=+document.getElementById("student-edit-age").value;


        // console.log(first)
        // console.log(last)
        // console.log(age);

        let user = {

            first_name:first,  
            last_name:last,
            age:age
        }

        await editStudentApi(user,userObj.id)


    }else if(obj.classList.contains("book-modal-edit-btn")){
        
        let book = await getBookByIdApi(obj.parentNode.parentNode.id)
        
        contentDiv.innerHTML="";
        contentDiv.appendChild(editBookModal(book));

    }else if(obj.classList.contains("edit-book-modal-save-btn")){


            
    let title = document.getElementById("edit-book-name").value;
    let author = document.getElementById("edit-book-author").value;
    let date = document.getElementById("edit-book-creation-date").value;

    let editedBook = {
        book_name:title,
        created_at:date,
        author:author
    }

    await editBookApi(editedBook,document.querySelector(".edit-book-modal").id)
    }else if(obj.classList.contains("edit-book-modal-close-btn")){
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForBooks());
        populateDivForBooks();
    }
    else if(obj.classList.contains("edit-book-modal-del-btn")){
        
        await deleteBook(document.querySelector(".edit-book-modal").id)
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForBooks());
        populateDivForBooks();
    } else if(obj.classList.contains("div-for-books-add-btn")){
        
        contentDiv.innerHTML="";
        contentDiv.appendChild(addNewBookModal());
    }else if(obj.classList.contains("new-book-modal-add-btn")){
        
        
        let title = document.getElementById("new-book-name").value;
        let author = document.getElementById("new-book-author").value;
        let date = document.getElementById("new-book-creation-date").value;

        let book = {
            book_name:title,
            author:author,
            date:date
        }

        await addBook(book)

    }else if(obj.classList.contains("new-book-modal-close-btn")){
        console.log(obj)
        contentDiv.innerHTML="";
        contentDiv.appendChild(divForBooks());
        populateDivForBooks();
    }else if(obj.classList.contains("courses-btn")){

    contentDiv.innerHTML="";
    contentDiv.appendChild(divForCourses());
    populateDivForCourses()
    document.querySelector(".div-for-courses").appendChild(enrollmentBtnLabel());
    userObj = await getStudentByEmail(loggedInStudent);
    let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
            
        if(userEnrolls!=undefined){
            for(let i=0;i<userEnrolls.length;i++){
        
                document.getElementById(`${userEnrolls[i].course_id}`).firstElementChild.firstElementChild.textContent="Enrolled"
                document.getElementById(`${userEnrolls[i].course_id}`).firstElementChild.firstElementChild.classList.add("enrolled-label")
            }
        }
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

    userObj = await getStudentByEmail(loggedInStudent);
    let contentDiv = document.querySelector(".content-div");
    
    // console.log(userObj)
    let userEnrolls= await getEnrollmentByStudentsId(userObj.id);

    // let filledEnrolls=[];
    // for(let i=0;i<userEnrolls.length;i++){

    //     for(let j=0;j<courses.courses.length;j++){

    //         if(userEnrolls[i].course_id===courses.courses[j].id){
    //             filledEnrolls.push(courses.courses[j]);
    //         }

    //     }

    // }
    // console.log(filledEnrolls)
    
    

    

})

enrollsBtn.addEventListener("click",async(e)=>{

    let obj=e.target;

    let contentDiv = document.querySelector(".content-div");
    contentDiv.innerHTML="";
    contentDiv.appendChild(divForEnrollments());
    populateDivForEnrollments()

    


})
        

//so-far functionalities
// GET,POST,PUT for Users 
// GET,PUT,DELETE Enrollments at courses 
// GET for courses
// GET, POST, PUT, DELETE for books

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