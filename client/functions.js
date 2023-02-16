function navbar(){

    
    let text = `<div class=" navbar  h-[100px] w-full bg-transparent flex flex-row items-center relative flex-wrap justify-between text-xs lg:text-xl md:flex-nowrap">

    <div class=" w-full  flex flex-row flex-nowrap items-center justify-center md:justify-start">
        <button type="button"
            class="border  border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Students
        </button>

        <button type="button"
            class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Books
        </button>

        <button type="button"
            class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Courses
        </button>

        <button type="button"
            class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Enrollments
        </button>
    </div>



</div>


</div>`
    return text;


}

function loginTab(){

    let text = `
    <div class="w-full hidden  flex flex-row flex-nowrap justify-center items-center md:justify-end">
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Login
    </button>
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Sign up
    </button>
</div>`

return text;

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

    
    // edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("book-modal-edit-btn")
    
    editBtn.textContent = "Edit"
    btnDiv.appendChild(editBtn)


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
    bookName.textContent ="Name: "+ obj.book_name;

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
    // mainDiv.id = obj.id


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
    courseName.id="course-name"
    // fullName.textContent = obj.name;

    let department = document.createElement("p");
    secondDiv.appendChild(department);
    department.id="course-creation-date"
    // model.textContent = obj.department;




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
    // mainDiv.id = obj.id


    // div for buttons

    let btnDiv = document.createElement("div");
    btnDiv.id = "enrollment-modal-btn-div"
    mainDiv.appendChild(btnDiv)

    
    // edit button
    let editBtn = document.createElement("button");
    editBtn.classList.add("enrollment-modal-edit-btn")
    
    editBtn.textContent = "Edit"
    btnDiv.appendChild(editBtn)


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
    // fullName.textContent = obj.name;

    let course_id = document.createElement("p");
    secondDiv.appendChild(course_id);
    course_id.id="enrollment-course-id"
    // model.textContent = obj.department;

    let created_at = document.createElement("p");
    secondDiv.appendChild(created_at);
    created_at.id="enrollment-creation-date"
    // model.textContent = obj.created_at;



    return mainDiv;
}




// students

function divForStudents(){

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("div-for-students");

    let label = document.createElement("p");
    label.textContent="Students"
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
    // mainDiv.id = obj.id


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

    let first_name = document.createElement("p");
    secondDiv.appendChild(first_name);
    first_name.id="student-first-name"
    // fullName.textContent = obj.name;

    let last_name = document.createElement("p");
    secondDiv.appendChild(last_name);
    last_name.id="student-last-name"
    // model.textContent = obj.department;

    let email = document.createElement("p");
    secondDiv.appendChild(email);
    email.id="student-email"
    // model.textContent = obj.created_at;


    let age = document.createElement("p");
    secondDiv.appendChild(age);
    age.id="student-age"
    // model.textContent = obj.created_at;



    return mainDiv;
}



// create api 


// populate all modals
// sign up window
// log in window


// populate landing page with new items 
// navbar and logintab are functions that return text, no DOM , so must use innerHTL
// landing page for every user connected , with his enrollments, courses that the user enrolled to and his info
// master account for course add and edit and data management through client
// normal account with delete or enroll active 
// dupa login, tab de My Courses / Enrollments / User profile 
//







// main.removeChild(document.querySelector(".navbar"))