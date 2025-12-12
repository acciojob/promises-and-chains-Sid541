let nameEl = document.getElementById("name");
let ageEl = document.getElementById("age");
let submit = document.getElementById("btn");

submit.addEventListener("click", (e) => {
    
    if (nameEl.value !== "" && ageEl.value !== "") {
        ageCheck(parseInt(ageEl.value))
            .then((message) => {
                alert(message); // prints resolve value
            })
            .catch((err) => {
                alert(err); // prints reject value
            });
    } else {
        alert("Please enter valid details.");
    }
});

function ageCheck(age) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (age > 18) {
                res("Welcome, you can vote.");
            } else {
                rej("Oh sorry, you aren't old enough.");
            }
        }, 4000);
    });
}
