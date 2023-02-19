function navbar(){

    
    let text = `<div class=" navbar mt-16  h-[100px] w-full bg-transparent flex flex-row items-center relative flex-wrap justify-between text-xs lg:text-xl md:flex-nowrap md:mt-8 lg:-mt-2">

    <div class=" w-full  flex flex-row flex-nowrap items-center justify-center">
        <button type="button"
            class=" students-btn border  border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Students
        </button>

        <button type="button"
            class=" books-btn border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Books
        </button>

        <button type="button"
            class="courses-btn border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Courses
        </button>

        <button type="button"
            class="enrolls-btn border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Enrollments
        </button>
    </div>


    




</div>


</div>`
    return text;


}

function loginTab(){

    let text = `
    <div class=" w-full flex flex-row flex-nowrap pt-10  justify-end items-center text-xs lg:text-xl md:flex-nowrap ">
    <button type="button"
        class="border login-navbar-btn border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Login
    </button>
    <button type="button"
        class="border signup-btn border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Sign up
    </button>
</div>`

return text;

}

// marketing

function marketing(){
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-marketing");

    let img = document.createElement("img");
    img.classList.add("land-img")
    mainDiv.appendChild(img);
    img.src="./images/1m.svg"
    
    // let secondDiv = document.createElement("div");
    // secondDiv.classList.add("div-for-books-content")
    return mainDiv;
}


// books


function divForBooks(){

    

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-books");

    let label = document.createElement("p");
    label.textContent="Books"
    label.id="div-for-books-label"
    mainDiv.appendChild(label);
    
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("div-for-books-content")
    mainDiv.appendChild(secondDiv)

    

    return mainDiv;

}


function bookModal(obj){

    

    // book_name
    // created_at

    // main container
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("book-modal");
    mainDiv.id = obj.id


    // div for buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "book-modal-btn-div"
    mainDiv.appendChild(btnDiv)

    
    // // edit button
    // let editBtn = document.createElement("button");
    // editBtn.classList.add("book-modal-edit-btn") 
    // editBtn.textContent = "Edit"
    // btnDiv.appendChild(editBtn)

    // buy button
    let buyBtn = document.createElement("button");
    buyBtn.classList.add("book-modal-buy-btn") 
    buyBtn.textContent = "Buy"
    btnDiv.appendChild(buyBtn)


    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.classList.add("book-modal-del-btn")
    btnDiv.appendChild(delBtn)


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("book-modal-img-div")
    mainDiv.appendChild(imgDiv)

    let poster = document.createElement("img");
    poster.src = "./images/book-img.png"
    poster.id = "book-logo"
    imgDiv.appendChild(poster)
    

    // info div 
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("book-modal-info-div")
    mainDiv.appendChild(secondDiv)

    let bookName = document.createElement("p");
    secondDiv.appendChild(bookName);
    bookName.id="book-name"
    bookName.textContent ="Title " + obj.book_name;

    let author = document.createElement("p");
    secondDiv.appendChild(author);
    author.id="book-author"
    author.textContent ="By " + obj.author;

    let createdAt = document.createElement("p");
    secondDiv.appendChild(createdAt);
    createdAt.id="book-creation-date"
    createdAt.textContent ="Created at: "+ obj.created_at;

    

    return mainDiv;
}


async function populateDivForBooks(){

    let divForBooks=document.querySelector(".div-for-books-content")


    let response = await getBooksApi();
    

    for(i=0;i<response.books.length;i++){
        // console.log(response.books[i]);
        divForBooks.appendChild(bookModal(response.books[i]));
    }

}




// courses
function divForCourses(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-courses");

    let label = document.createElement("p");
    label.textContent="Courses"
    label.id="div-for-courses-label"
    mainDiv.appendChild(label);
    
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("div-for-courses-content")
    mainDiv.appendChild(secondDiv)



    return mainDiv;

}

function courseModal(obj){

    
    // name
    // department

    // main container
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("course-modal");
    mainDiv.id = obj.id


    // div for buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "course-modal-btn-div"
    mainDiv.appendChild(btnDiv)

    
    // edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("course-modal-edit-btn")
    
    editBtn.textContent = "Edit"
    btnDiv.appendChild(editBtn)


    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.classList.add("course-modal-del-btn")
    btnDiv.appendChild(delBtn)


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("course-modal-img-div")
    mainDiv.appendChild(imgDiv)

    let poster = document.createElement("img");
    poster.src = "./images/course-logo.png"
    poster.id = "course-logo"
    imgDiv.appendChild(poster)
    

    // info div 
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("course-modal-info-div")
    mainDiv.appendChild(secondDiv)

    let courseName = document.createElement("p");
    secondDiv.appendChild(courseName);
    let courseLabel = document.createElement("p");
    secondDiv.appendChild(courseLabel);
    courseName.id="course-name"
    courseName.textContent = obj.name;

    let department = document.createElement("p");
    secondDiv.appendChild(department);
    department.id="course-creation-date"
    department.textContent = obj.department;




    return mainDiv;
}

async function populateDivForCourses(){

    let divForCourses=document.querySelector(".div-for-courses-content")


    let response = await getCoursesApi();
    

    for(i=0;i<response.courses.length;i++){
        // console.log(response.books[i]);
        divForCourses.appendChild(courseModal(response.courses[i]));
    }

}




// enrollments
function divForEnrollments(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-enrollments");

    let label = document.createElement("p");
    label.textContent="Enrollments"
    label.id="div-for-enrollments-label"
    mainDiv.appendChild(label);
    
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("div-for-enrollments-content")
    mainDiv.appendChild(secondDiv)


    return mainDiv;

}

function enrollmentModal(obj){

    
    // student_id
    // course_id
    // created_at

    // main container
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("enrollment-modal");
    mainDiv.id = obj.id


    // div for buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "enrollment-modal-btn-div"
    mainDiv.appendChild(btnDiv)


    // edit button
    let details = document.createElement("button");
    details.classList.add("enrollment-modal-details-btn")
    
    details.textContent = "See details"
    btnDiv.appendChild(details)

    
    // // edit button
    // let editBtn = document.createElement("button");
    // editBtn.classList.add("enrollment-modal-edit-btn")
    
    // editBtn.textContent = "Edit"
    // btnDiv.appendChild(editBtn)


    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.classList.add("enrollment-modal-del-btn")
    btnDiv.appendChild(delBtn)


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("enrollment-modal-img-div")
    mainDiv.appendChild(imgDiv)

    let poster = document.createElement("img");
    poster.src = "./images/enrollment-logo.png"
    poster.id = "enrollment-logo"
    imgDiv.appendChild(poster)
    

    // info div 
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("enrollment-modal-info-div")
    mainDiv.appendChild(secondDiv)

    let student_id = document.createElement("p");
    secondDiv.appendChild(student_id);
    student_id.id="enrollment-student-id"
    student_id.textContent ="Student ID "+ obj.student_id;

    let course_id = document.createElement("p");
    secondDiv.appendChild(course_id);
    course_id.id="enrollment-course-id"
    course_id.textContent ="Course ID "+ obj.course_id;

    let created_at = document.createElement("p");
    secondDiv.appendChild(created_at);
    created_at.id="enrollment-creation-date"
    created_at.textContent = "Enrolled at "+ obj.created_at;



    return mainDiv;
}

async function populateDivForEnrollments(){

    let divForEnrollments=document.querySelector(".div-for-enrollments-content")


    let response = await getEnrollmentsApi();
    

    for(i=0;i<response.enrollment.length;i++){
        // console.log(response.books[i]);
        divForEnrollments.appendChild(enrollmentModal(response.enrollment[i]));
    }

}


function createEnrollmentExtended(enrollment,student,course){


    // let response = await getEnrollmentById(id);


    let mainDiv=document.createElement("div");
    mainDiv.classList.add("extended-enrollment-details");
    mainDiv.id=enrollment.id

    let enrollmentLabel = document.createElement("p");
    mainDiv.appendChild(enrollmentLabel);
    enrollmentLabel.id="enrollment-id-label";
    enrollmentLabel.textContent=`Enrollment ID ${enrollment.id}, from ${enrollment.created_at}`
    // buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "extended-enrollment-modal-btn-div"
    mainDiv.appendChild(btnDiv)

    
    let editBtn = document.createElement("button");
    editBtn.classList.add("extended-enrollment-modal-edit-btn")
    editBtn.textContent="Edit"
    btnDiv.appendChild(editBtn)


    let close = document.createElement("button");
    close.classList.add("extended-enrollment-modal-close-btn")
    close.textContent = "Close"
    btnDiv.appendChild(close)



    // student card 

    let studentDiv = document.createElement("div");
    studentDiv.classList.add("extended-student-modal-info-div")
    mainDiv.appendChild(studentDiv)
    studentDiv.id=enrollment.student_id;

    let label = document.createElement("p");
    studentDiv.appendChild(label);
    label.id="extended-student-name-label"
    label.textContent = "Student info:"


    let name = document.createElement("p");
    studentDiv.appendChild(name);
    name.id="extended-student-name"
    name.textContent ="Full name: " +student.first_name +" " + student.last_name;

    

    let email = document.createElement("p");
    studentDiv.appendChild(email);
    email.id="extended-student-email"
    email.textContent ="Email address: "+ student.email;


    let age = document.createElement("p");
    studentDiv.appendChild(age);
    age.id="extended-student-age"
    age.textContent = "Age: "+student.age;

    // course card

    let courseDiv = document.createElement("div");
    courseDiv.classList.add("extended-course-modal-info-div")
    mainDiv.appendChild(courseDiv)
    courseDiv.id=enrollment.course_id;

    let label2 = document.createElement("p");
    courseDiv.appendChild(label2);
    label2.id="extended-course-name-label"
    label2.textContent = "Course info:"


    let courseName = document.createElement("p");
    courseDiv.appendChild(courseName);
    let courseLabel = document.createElement("p");
    courseDiv.appendChild(courseLabel);
    courseName.id="extended-course-name"
    courseName.textContent ="Title: "+ course.name;

    let department = document.createElement("p");
    courseDiv.appendChild(department);
    department.id="extended-course-creation-date"
    department.textContent ="Department: "+ course.department;




    return mainDiv;

}







// students

function divForStudents(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-students");

    let label = document.createElement("p");
    label.textContent="Students"
    label.id="div-for-students-label"
    mainDiv.appendChild(label);
    
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("div-for-students-content")
    mainDiv.appendChild(secondDiv)


    return mainDiv;

}
function studentModal(obj){

    
    // first_name
    // last_name
    // email
    // age

    // main container
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("student-modal");
    mainDiv.id = obj.id


    // div for buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "student-modal-btn-div"
    mainDiv.appendChild(btnDiv)

    
    // edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("student-modal-edit-btn")
    
    editBtn.textContent = "Edit"
    btnDiv.appendChild(editBtn)


    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.classList.add("student-modal-del-btn")
    btnDiv.appendChild(delBtn)


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("student-modal-img-div")
    mainDiv.appendChild(imgDiv)

    let poster = document.createElement("img");
    poster.src = "./images/student-logo.png"
    poster.id = "student-logo"
    imgDiv.appendChild(poster)
    

    // info div 
    let secondDiv = document.createElement("div");
    secondDiv.classList.add("student-modal-info-div")
    mainDiv.appendChild(secondDiv)

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("namediv-modal-info-div")
    secondDiv.appendChild(nameDiv)

    let first_name = document.createElement("p");
    nameDiv.appendChild(first_name);
    first_name.id="student-first-name"
    first_name.textContent = obj.first_name;

    let last_name = document.createElement("p");
    nameDiv.appendChild(last_name);
    last_name.id="student-last-name"
    last_name.textContent = obj.last_name;

    let email = document.createElement("p");
    secondDiv.appendChild(email);
    email.id="student-email"
    email.textContent = obj.email;


    let age = document.createElement("p");
    secondDiv.appendChild(age);
    age.id="student-age"
    age.textContent = "Age "+obj.age;



    return mainDiv;
}


async function populateDivForStudents(){

    let divForStudents=document.querySelector(".div-for-students-content")


    let response = await getStudentsApi();
    

    for(i=0;i<response.students.length;i++){
        // console.log(response.books[i]);
        divForStudents.appendChild(studentModal(response.students[i]));
    }

}



function createLoginMask(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("login-modal");

    let close = document.createElement("button");
    close.classList.add("login-modal-close-btn")
    close.textContent = "Close"
    mainDiv.appendChild(close)

    let label = document.createElement("p");
    label.textContent="Log in to your account"
    label.id="login-modal-label"
    mainDiv.appendChild(label);


    let nameDiv = document.createElement("div");
    nameDiv.classList.add("login-modal-email-div");
    mainDiv.appendChild(nameDiv)

    let nameLabel = document.createElement("p");
    nameLabel.textContent="Email"
    nameLabel.id="login-modal-email-label"
    nameDiv.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.placeholder=" your email address"
    nameInput.id="login-modal-email-input"
    nameDiv.appendChild(nameInput);


    let passDiv = document.createElement("div");
    passDiv.classList.add("login-modal-pass-div");
    mainDiv.appendChild(passDiv)

    let passLabel = document.createElement("p");
    passLabel.textContent="Password"
    passLabel.id="login-modal-pass-label"
    passDiv.appendChild(passLabel);


    let passInput = document.createElement("input");
    passInput.placeholder=" your password"
    passInput.id="login-modal-pass-input"
    passInput.type="password"
    passDiv.appendChild(passInput);


    let alternative = document.createElement("a");
    alternative.textContent="Not registered yet? Register here!"
    alternative.id="login-modal-reg-label"
    mainDiv.appendChild(alternative);

    // login btn

    let loginBtn = document.createElement("button");
    loginBtn.textContent="Log in";
    loginBtn.classList.add("login-modal-login-btn")
    mainDiv.appendChild(loginBtn)




    return mainDiv;

}



function createSignupMask(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("signup-modal");

    let close = document.createElement("button");
    close.classList.add("signup-modal-close-btn")
    close.textContent = "Close"
    mainDiv.appendChild(close)

    let label = document.createElement("p");
    label.textContent="Sign up now and enjoy all benefits!"
    label.id="login-modal-label"
    mainDiv.appendChild(label);


    let nameDiv = document.createElement("div");
    nameDiv.classList.add("signup-modal-email-div");
    mainDiv.appendChild(nameDiv)

    let nameLabel = document.createElement("p");
    nameLabel.textContent="Email"
    nameLabel.id="signup-modal-email-label"
    nameDiv.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.placeholder=" your email address"
    nameInput.id="signup-modal-email-input"
    nameDiv.appendChild(nameInput);


    let passDiv = document.createElement("div");
    passDiv.classList.add("signup-modal-pass-div");
    mainDiv.appendChild(passDiv)

    let passLabel = document.createElement("p");
    passLabel.textContent="Password"
    passLabel.id="signup-modal-pass-label"
    passDiv.appendChild(passLabel);


    let passInput = document.createElement("input");
    passInput.placeholder=" your password"
    passInput.id="signup-modal-pass-input"
    passInput.type="password"
    passDiv.appendChild(passInput);


    let alternative = document.createElement("a");
    alternative.textContent="Already registered? Log in to your account here !"
    alternative.id="signup-modal-reg-label"
    mainDiv.appendChild(alternative);

    // login btn

    let loginBtn = document.createElement("button");
    loginBtn.textContent="Register";
    loginBtn.classList.add("signup-modal-signup-btn")
    mainDiv.appendChild(loginBtn)




    return mainDiv;

}


// sign up window



// populate landing page with new items 
// navbar and logintab are functions that return text, no DOM , so must use innerHTL
// landing page for every user connected , with his enrollments, courses that the user enrolled to and his info
// master account for course add and edit and data management through client
// normal account with delete or enroll active 
// dupa login, tab de My Courses / Enrollments / User profile 
//







// main.removeChild(document.querySelector(".navbar"))