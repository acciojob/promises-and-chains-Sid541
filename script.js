let nameEl = document.getElementById("name");
let ageEl = document.getElementById("age");
let submit = document.getElementById("btn");

submit.addEventListener("click", () => {
e.preventDefault();
    if (nameEl.value !== "" && ageEl.value !== "") {
        ageCheck(parseInt(ageEl.value), nameEl.value)
            .then((message) => {
                alert(message);
            })
            .catch((err) => {
                alert(err);
            });
    } else {
        alert("Please enter valid details"); // FIXED (no dot)
    }
});

function ageCheck(age, username) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (age > 18) {
                res(`Welcome, ${username}. You can vote.`);
            } else {
                rej(`Oh sorry ${username}. You aren't old enough.`);
            }
        }, 4000);
    });
}
