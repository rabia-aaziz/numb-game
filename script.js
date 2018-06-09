

let computerSecret;
let userInput;

function selectNew(){
let computerSecret = parseInt(Math.random()*100);

}

function guess(){
 
 let userInput = parseInt (document.querySelector("input").value);
                 console.log(typeof userInput);


     if (userInput === computerSecret){
        alert("Congratulations!! YOU WON!");
     }

     else if (userInput > computerSecret){
          alert("Too High");
     }

     else
     {
         alert("Too Low");
     }
      


}