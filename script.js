let name = document.getElementById("name");
let age = document.getElementById("age")
let submit = document.getElementById("btn")

submit.addEventListener("click",(e)=>{
	console.log(name)
    if(name.value !== "" && age.value !== ""){
        ageCheck(parseInt(age.value));
    }
    else{
        alert("Please enter valid details.")
    }
})

function ageCheck(age){
    let promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            if(age > 18){
                alert("Welcome, . You can vote.");
                res("you can vote");
            }else{
                alert("Oh sorry . You aren't old enough.");
                rej("Oh sorry . You aren't old enough.")
            }
        },4000)
    })
}