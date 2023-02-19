
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

    let data = await api(`/books/all`)

    return data.json();

}


async function getCoursesApi(){

    let data = await api(`/courses/all`)

    return data.json();

}


async function getEnrollmentsApi(){

    let data = await api(`/enrollments/all`)

    return data.json();

}


async function getStudentsApi(){

    let data = await api(`/students/all`)

    return data.json();

}


async function getBookByIdApi(id){

    
    let data = await api(`/books/by-ID/id=${id}`)
    return data.json();

}

async function getEnrollmentById(id){

    let data = await api(`/enrollments/by-ID/id=${id}`)

    return data.json();

}


async function getStudentById(id){

    let data = await api(`/students/by-ID/id=${id}`)

    return data.json();

}

async function getCourseById(id){

    let data = await api(`/courses/by-ID/id=${id}`)

    return data.json();

}



// POST methods

async function addBook(book){

    // FETCH with url attribute , method POST and an object
    let data = await api("/books/add","POST",book)
    return data.json()

}


async function addCourse(course){

    // FETCH with url attribute , method POST and an object
    let data = await api("/courses/add","POST",course)
    return data.json()

}


async function addEnrollments(enrollment){

    // FETCH with url attribute , method POST and an object
    let data = await api("/enrollments/add","POST",enrollment)
    return data.json()

}


async function addStudent(student){
    
    // FETCH with url attribute , method POST and an object
    let data = await api("/students/add","POST",student)
    return data.json()

}


// DELETE methods 

async function deleteBook(id){

    let data = await api('/books/delete/id='+id,"DELETE");

    return data.json("Book successfully deleted");
}


async function deleteCourse(id){

    let data = await api('/courses/delete/id='+id,"DELETE");

    return data.json("Course successfully deleted");
}


async function deleteEnrollment(id){

    let data = await api('/enrollments/delete/id='+id,"DELETE");

    return data.json("Enrollment successfully deleted");
}


async function deleteStudent(id){

    let data = await api('/students/delete/id='+id,"DELETE");

    return data.json("Student successfully deleted");
}


// PUT methods 

async function editBookApi(book,id){

    try{

        // when this line finishes, the object is already modified
    let data = await api('/books/edit/id='+id,"PUT",book);

    // expect data with status , as build in the api
    if(data.status!=207){

        // await the error message as a json object
        let response= await data.json();
        
        alert(response.error.message)


        
    } else if(data.status===207) {

        console.log("Book edited successfully")
        // return data.json(car);
    }
    
    }catch(e){


        console.log(e);

    }


    


}

