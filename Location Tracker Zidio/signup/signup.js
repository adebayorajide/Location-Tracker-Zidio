const formEl = document.getElementById('form');
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const errorEl = document.getElementById("error");
const passwordError = document.querySelector(".password_error");
const agree = document.getElementById("agree");
 

 password.addEventListener("keydown", (e) => {
   if (password.value.length < 7 || password.value.length > 14) {
     passwordError.style.display = "block";
   } else {
     passwordError.style.display = "none";
   }
 });
    

formEl.addEventListener("submit", async (e)=>{
    e.preventDefault();
    console.log("submit");

    
     const formData = new FormData(formEl);
     const data = new URLSearchParams(formData);

     fetch('https://geolocation-tracker-be.onrender.com/api/v1/auth/signup', {
       method: "POST",
       body: "data",
     })
       .then((res) => res.json())
       .then((data) => console.log(data))
       .catch((error) => console.log(error)); 

    if(nameEl.value === "" || nameEl.value === null || email.value === "" || email.value === null || password.value === "" || password.value === null) {
        errorEl.style.display = "block";
        errorEl.innerText = "Field cannot be empty";
        return false;
    }

    // else if(confirmPassword.value !== password.value) {
    //       errorEl.style.display = "block";
    //       errorEl.innerText = "Password does not match"
    //       return false;
    // }

    //  else if (!agree.checked) {
    //     errorEl.style.display = "block";
    //    errorEl.innerText = "You didn't agree to terms";
    //    return false;
    // }
    
 else {
       errorEl.style.display = "none";
       return true;
     }

 
})