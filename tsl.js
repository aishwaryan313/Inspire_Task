const inputbox = document.getElementById("inputbox");
const listcont = document.getElementById("listcont");
const countvalue=document.getElementsByClassName("count");
let taskc=0;
const display = (taskc)=> {
    countvalue.innerText = taskc;
}
function addtask() {
    if (inputbox.value == '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskc = taskc + 1;
        display(taskc);
       

    }
   
    inputbox.value = "";
    savedata();
}
listcont.addEventListener("click", function (b){
    if (b.target.tagName === "LI") {
        b.target.classList.add("checked");
       
        savedata();
    }
    else if (b.target.tagName === "SPAN") {
        b.target.parentElement.remove();
       
       
        savedata();
    }
},)

function savedata(){
    localStorage.setItem("data", listcont.innerHTML);
}
function showtask(){
    listcont.innerHTML=localStorage.getItem("data");
}
showtask();

const text=document.getElementById("para");



const getNewQuote = async () =>
{
    
    var url="https://type.fit/api/quotes";    

    
    const response=await fetch(url);
    console.log(typeof response);
    
    const allQuotes = await response.json();

    
    const indx = Math.floor(Math.random()*allQuotes.length);

    
    const quote=allQuotes[indx].text;

    

    
    text.innerHTML=quote;
    

    

}
getNewQuote();