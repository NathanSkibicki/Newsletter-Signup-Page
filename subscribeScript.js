document.addEventListener("DOMContentLoaded", function(){
    const userEmail = document.getElementById("userEmail")
    const storedEmail = localStorage.getItem("userEmail")

    userEmail.textContent = storedEmail
})