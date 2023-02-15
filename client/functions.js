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


    <div class="w-full  flex flex-row flex-nowrap justify-center items-center md:justify-end">
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Login
    </button>
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Sign up
    </button>
</div>


</div>`
    return text;


}

function loginTab(){

    let text = `
    <div class="w-full  flex flex-row flex-nowrap justify-center items-center md:justify-end">
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Login
    </button>
    <button type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
        Sign up
    </button>
</div>`


}


function Modal(obj){

    // firstname
    // lastname
    // email
    // age

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("card");
    mainDiv.id = obj.id




    return mainDiv;
}

let main = document.querySelector(".navbar-parent");
main.innerHTML=navbar();


// main.removeChild(document.querySelector(".navbar"))