
const btn = document.querySelector("button");
const names = document.querySelector("#name");
const time = document.querySelector("#time");
const h1 = document.querySelector("#heading")


btn.addEventListener("click", setAlarm);
function setAlarm() {
    const alarm = new Promise(function (resovle, reject) {
        setTimeout(() => {

            if (time.value > 0) {
                resovle( names.value)
            } else {
                reject("error is found")
            }
        }, time.value);
    })
       .then((user)=>{
        h1.innerHTML = user
       })
        .catch((err) => {
            console.log(err);
        });
}  