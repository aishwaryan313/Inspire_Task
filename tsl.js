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
//var quote = ["We cannot solve problems with the kind of thinking we employed when we came up with them ",
    //"Learn as if you will live forever, live like you will die tomorrow",
    //"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too",
    //"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out",
    //"When you change your thoughts, remember to also change your world.",
    //"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest",
    //"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together",
    //"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    //"It is better to fail in originality than to succeed in imitation.",
   // "The road to success and the road to failure are almost exactly the same",
    //"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
    //"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
    //"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable",
    //"I never dreamed about success. I worked for it.",
    //"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    //"Dont let yesterday take up too much of today",
    //"You learn more from failure than from success. Dont let it stop you. Failure builds character",
   // "If you are working on something that you really care about, you dont have to be pushed. The vision pulls you.",
   // "Experience is a hard teacher because she gives the test first, the lesson afterwards",
    //"To know how much there is to know is the beginning of learning to live."
//]

//function myquote() {
    //var quoteran = Math.floor(Math.random() * (quote.length));
   // document.getElementById('para').innerHTML = quote[quoteran];
//}
const text=document.getElementById("para");
//const author=document.getElementById("author");


const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    //const auth=allQuotes[indx].author;

   // if(auth==null)
    //{
       // author = "Anonymous";
    //}

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    //author.innerHTML="~ "+auth;

    

}
getNewQuote();