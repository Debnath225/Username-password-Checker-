const userInput = document.getElementById("userInput");
const consol = document.getElementById("consol");
const userName =document.getElementById("userName");
const submitBtn =document.getElementById("submitBtn");
const nameBtn =document.getElementById("nameHolder");

const nval = nameHolder.value;
const val = userInput.value;


function UserName(nval){
const StoredData = ["Rahul Hati","Debnath Hati","Suman Mondal","Riya Roy","Ram","Piu Hati","Piu Sar","Kirtick Sar"];
if(StoredData.includes(nval)){
    console.log("Name Matched");
    userName.innerHTML=`${nval}`;
    nameHolder.style.border="2px solid green";

}else{
    console.log("No Match Found!!!");
    userName.innerHTML="No Match Found!!!";
    nameHolder.style.border="2px solid red";
}

}


function checkPassword(val) {
    // Define the four different password combinations
    const passwordCombinations = [
        "Password123",
        "12345678",
        "mypassword",
        "qwerty",
        "piusar"
    ];
    let name ="";


    // Check if the input password matches any of the combinations
    if (passwordCombinations.includes(val)) {
        console.log("Access granted!");
        consol.innerHTML="Access granted!";
        consol.style.color="green";
        submitBtn.style.border="2px solid green";
        userInput.style.border="2px solid green";
       
    }
  //  else if{
    //    userInput.value=0;
      //  return ;
   //}
    else {
        console.log("Access denied! Incorrect password.");
        consol.innerHTML="Access denied!";
        consol.style.color="red";
        submitBtn.style.border="2px solid red";
        userInput.style.border="2px solid red"

    }
  
}

// Example usage
// const userInput = prompt("Enter your password:"); // For browsers
// checkPassword(userInput);
