
// basis api function that returns fetch 

function api(path,method='GET',body=null){

    // a function with path attribute, method (get by default) and null body
    // null body because only reads


    const url = "http://localhost:3200/api/v1" + path;

    const options = {

        // GET method by default
        method, 

        // header 
        headers:{

            'Content-Type':'application/json; charset=utf-8',
            'X-Requested-With':'XMLHttpRequest'
        }
    }



    // body!= null means change of state, body must receive additional info

    if(body!=null){

        // receive the options and transform javascript in json

        options.body=JSON.stringify(body);

    }

    // will return the fetch
    return fetch(url,options)


}


// GET methods

async function getBooksApi(){

try {
    let data = await api(`/books/all`)

    return data.json();

} catch (error) {
    console.log(error)
}
}


async function getCoursesApi(){



    try {
        let data = await api(`/courses/all`)

        return data.json();
    } catch (error) {
        console.log(error)
    }

}


async function getEnrollmentsApi(){



    try {
        let data = await api(`/enrollments/all`)

        return data.json();
    } catch (error) {
        console.log(error)
    }

}


async function getStudentsApi(){



    try {
        let data = await api(`/students/all`)

        return data.json();
    } catch (error) {
        console.log(error)
    }

}


async function getBookByIdApi(id){

    


    try {
        let data = await api(`/books/by-id/id=${id}`)
        return data.json();
    } catch (error) {
        alert(error)
    }

}

async function getEnrollmentById(id){



    try {
        let data = await api(`/enrollments/by-id/id=${id}`)

        return data.json();
    } catch (error) {
        console.log(error)
    }

}


async function getStudentById(id){



    try {    let data = await api(`/students/by-id/id=${id}`)

    return data.json();
        
    } catch (error) {
        console.log(error)
    }

}

async function getStudentByEmail(email){



    try {    let data = await api(`/students/by-email/email=${email}`)

    return data.json();
        
    } catch (error) {
        console.log(error)
    }

}

async function getCourseById(id){

try {
    let data = await api(`/courses/by-id/id=${id}`)

    return data.json();
} catch (error) {
    console.log(error)
}

}



async function getEnrollmentByStudentsId(id){

    try {
        let data = await api(`/enrollments/by-student-id/id=${id}`)
        // return data.json();

        if(data.status!=230){
            let response = await data.json();
            console.log(response.error.message)
            // console.log(response.error.message)
            document.querySelector(".account-enrolls-modal-info-div").innerHTML=""
            document.querySelector(".account-enrolls-modal-info-div").appendChild(noEnrollsErrorMsg(response.error.message))
        }else {
            return data.json();
        }


    } catch (error) {
        console.log(error)
        
    }


}


// POST methods

async function addBook(book){

   try {
     // FETCH with url attribute , method POST and an object
     let data = await api("/books/add","POST",book)

     if(data.status!=206){
        

        if(document.querySelector(".add-book-error")){
            removeAddBookErrorMsg();
            // document.querySelector(".new-book-modal").removeChild(document.querySelector(".login-error"))
            // setTimeout(removeLoginErrorMsg(),3000) 
        }
        let response = await data.json();
        // alert(response.error.message)
        document.querySelector(".new-book-modal").appendChild(addBookErrorMsg(response.error.message))
    }else {
        alert("New title successfully added")

    }

    //  return data.json()
   } catch (error) {
    alert(error)
   }

}


async function addCourse(course){

    try {
        // FETCH with url attribute , method POST and an object
    let data = await api("/courses/add","POST",course)
        return data.json();

    } catch (error) {
        console.log(error)
    }

}


async function addEnrollments(enrollment){

    try {
        // FETCH with url attribute , method POST and an object
    let data = await api("/enrollments/add","POST",enrollment)

        if(data.status!=202){

            let response = await data.json();
            
            alert(response.error.message)

        }else {
            alert("Successfully enrolled")
        }
    } catch (error) {
        console.log(error)
    }

}



let alreadyReg;


async function addStudent(student){

    
    
    // FETCH with url attribute , method POST and an object
    try {
        let data = await api("/students/add","POST",student)

        if(data.status!=201){

            if(document.querySelector(".signup-error")){
                removeSignupErrorMsg();
            
            }

            let response = await data.json();

            
            // alert(response)
            document.querySelector(".signup-modal").insertBefore(signupErrorMsg(response.error.message),document.querySelector(".signup-modal-signup-btn"))
    
        }else {
            // bring in client
            alert("Successfully registered, please login")
            // return data.json();
            contentDiv.innerHTML="";
            contentDiv.appendChild(createLoginMask())
            
        }

    } catch (error) {
        console.log(error)
    }

}




let loggedInStudent;
let loginError;
let userObj;


async function login(user){


    if(document.querySelector(".login-error")){
        
        document.querySelector(".login-modal").removeChild(document.querySelector(".login-error"))
        // setTimeout(removeLoginErrorMsg(),3000) 
    }

    

    loggedInStudent="";
    loginError=""

    try {
            
        let data = await api("/students/login","POST",user);


    if(data.status!=212){

        // maybe switch from alert to something else 
        let response = await data.json();
        // alert(response.error.message); 
        document.querySelector(".login-modal").insertBefore(loginErrorMsg(response.error.message),document.querySelector(".login-modal-login-btn"))
        
        // console.log(loginStatus)

        // function to retrieve a user by email
        // and set it as the loggedInUser
    }else if(data.status==212){
        
        loggedInStudent=user.email;
        
        // console.log(loginStatus)
        // alert(user.email)
        
    }
    } catch (error) {
        console.log(error)
    }
    
}


// DELETE methods 

async function deleteBook(id){



    try {
        let data = await api('/books/delete/id='+id,"DELETE");

        return data.json("Book successfully deleted");
    } catch (error) {
        alert(error)
    }
    
}


async function deleteCourse(id){



    try {
        let data = await api('/courses/delete/id='+id,"DELETE");

        return data.json("Course successfully deleted");
    } catch (error) {
        console.log(error)
    }
    
}


async function deleteEnrollment(id){



    try {
        let data = await api('/enrollments/delete/id='+id,"DELETE");

        return data.json("Enrollment successfully deleted");
    } catch (error) {
        console.log(error)
    }
    
}


async function deleteStudent(id){

   

    try {
        let data = await api('/students/delete/id='+id,"DELETE");

        return data.json("Student successfully deleted");
    } catch (error) {
        console.log(error)
    }
    
}


// PUT methods 

async function editBookApi(book,id){

    try{

        // when this line finishes, the object is already modified
    let data = await api('/books/edit/id='+id,"PUT",book);

    // expect data with status , as build in the api
    if(data.status!=207){

        if(document.querySelector(".edit-book-error")){
            removeEditBookErrorMsg();
        }

        // await the error message as a json object
        let response= await data.json();
        
        // alert(response.error.message)
        document.querySelector(".edit-book-modal").appendChild(editBookErrorMsg(response.error.message))

        
    } else if(data.status===207) {

        alert("Book edited successfully")
        // return data.json(car);

        
    }
    
    }catch(e){


        console.log(e);

    }
}



async function editStudentApi(user,id){

    try{

        // when this line finishes, the object is already modified
    let data = await api('/students/edit/id='+id,"PUT",user);

    // expect data with status , as build in the api
    if(data.status!=210){

        if(document.querySelector(".edit-student-error")){
            removeEditStudentErrorMsg();
        }

        // await the error message as a json object
        let response= await data.json();
        
        // alert(response.error.message)
        document.querySelector(".student-modal-edit").insertBefore(editUserErrorMsg(response.error.message),document.querySelector(".save-info-account-btn"))



        
    } else if(data.status===210) {

        alert("Account information edited successfully")
        // return data.json(car);
        contentDiv.innerHTML="";
        userObj = await getStudentByEmail(loggedInStudent);
        let userEnrolls= await getEnrollmentByStudentsId(userObj.id);
        contentDiv.appendChild(accountModal(userObj));
        populateAccountEnrolls(userEnrolls);
    }
    
    }catch(e){


        console.log(e);

    }
}

