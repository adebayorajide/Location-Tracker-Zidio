const formEl = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const validate = async() => {
   const formData = new FormData(formEl)

     const data = Object.fromEntries(formData)

     const res  =  await fetch("https://geolocation-tracker-be.onrender.com/api/v1/auth/signin", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     })
       const result = await res.json();
*
       if(res.status === 201) {
        localStorage.setItem('token', result.token)
        alert(result.message)
       }
      //  try {
      //   console.log(result);
      //  } catch (error) {
      //   console.log(error);
      //  }

// if(email.value === result.email && password === result.password) {
//   alert(result.messsage)
}


formEl.addEventListener("submit",  (e) => {
    e.preventDefault()
    validate();
   
  
})