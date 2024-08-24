let pass = document.querySelector("#pass");
let cpass = document.querySelector("#cpass");
let btn = document.querySelector("button");
let hidetxt = document.querySelector("#match");

btn.addEventListener("click", () => {
  passcheck();
});

function passcheck() {
  console.log(pass.value);
  console.log(cpass.value);
  if (pass.value === cpass.value) {
    hidetxt.classList.add("hidden");
    location.reload();
  } else {
    hidetxt.classList.remove("hidden");
  }
}
