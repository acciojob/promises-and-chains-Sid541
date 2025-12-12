let name = document.getElementById("name");
let age = document.getElementById("age");
let submit = document.getElementById("btn");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    if (name.value !== "" && age.value !== "") {
        ageCheck(parseInt(age.value), name.value);
    } else {
        alert("Please enter valid details.");
    }
});

function ageCheck(age, username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                alert(`Welcome, ${username}. You can vote.`);
                resolve("Eligible");
            } else {
                alert(`Oh sorry ${username}. You aren't old enough.`);
                reject("Not eligible");
            }
        }, 4000);
    });
}
