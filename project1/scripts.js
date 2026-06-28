console.log("JS Loaded");
let addbtn=document.querySelector('#add_task')
let close=document.querySelector('#close')
 let form=document.querySelector('#form')
 let count=1;

//addbtn.style.display="flex"
 addbtn.addEventListener("click", display_form);
  close.addEventListener("click", close_form);

 function display_form(){
    console.log("inside display form");
   
form.style.display="flex"
 }
 function close_form()
 {
    console.log("inside close form");
  
form.style.display="none"
 }



 form.addEventListener("submit", function(event) {console.log("form submitted succesfully")
event.preventDefault();
let task_container = document.querySelector("#task-container");

let taskinput = document.querySelector('[data-id="task"]');
let taskcategory = document.querySelector('[data-category="category"]');
// let taskstatus = document.querySelector('[data-status="status"]');

console.log(taskinput.value);
console.log(taskcategory.value);
//console.log(taskstatus.value);

// main card creation
let card = document.createElement("div");
card.classList.add("card");

let heading = document.createElement("p");
heading.classList.add("heading");

let title = document.createElement("p");
title.classList.add("title");

let category = document.createElement("p");
category.classList.add("category");

let status = document.createElement("p");
status.classList.add("status");

let edit = document.createElement("button");
edit.classList.add("edit_btn");

let del = document.createElement("button");
del.classList.add("delete_btn");

let done = document.createElement("button");
done.classList.add("done_btn");

// NEW: Button container
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

// add value inside first three component
heading.innerText = "Task Details";
title.innerText = `Task: ${taskinput.value}`;
category.innerText = `Category: ${taskcategory.value}`;
status.innerText = `Status:Pending`;

edit.innerText = "Edit";
done.innerText = "Done";
del.innerText = "Delete";

// adding buttons inside button container
buttonContainer.appendChild(edit);
buttonContainer.appendChild(done);
buttonContainer.appendChild(del);

// adding these components inside card
card.appendChild(heading);
card.appendChild(title);
card.appendChild(category);
card.appendChild(status);
card.appendChild(buttonContainer);

// now add this card component inside main page div name task-container
card.setAttribute("data-id",count++);
task_container.appendChild(card);
// Clear the form fields
taskinput.value = "";
taskcategory.selectedIndex = 0;   // Selects the first option ("Select")
});




//edit functionality
let task_container = document.querySelector("#task-container");
task_container.addEventListener("click",function(event){
    console.log("inside ")
if(event.target.classList.contains("edit_btn")){
    let card=event.target.parentElement.parentElement;
    let title=card.querySelector(".title");
    let newTitle=prompt("enter new task title: ");
    if (newTitle !== null && newTitle.trim() !== "") {
            title.innerText = `Task: ${newTitle}`;
        }
   

}
if(event.target.classList.contains("delete_btn")){
    let card=event.target.parentElement.parentElement;
    
    card.remove();

}
if(event.target.classList.contains("done_btn"))
{
    let card = event.target.closest(".card");

    let status = card.querySelector(".status");
    let edit = card.querySelector(".edit_btn");
    let del = card.querySelector(".delete_btn");
    let done = card.querySelector(".done_btn");

    status.innerText = "Status: Done";

    card.setAttribute("data-status", "done");

    done.disabled = true;
    edit.disabled = true;
    del.disabled = true;

    card.classList.add("completed");
}
})
