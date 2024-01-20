document.addEventListener("DOMContentLoaded", function(){
    const emailInput = document.getElementById("emailInput");
    const subscribeButton = document.getElementById("subscribeButton");
    const errorMessage = document.getElementById("errorMessage")


    subscribeButton.addEventListener("click", function(){

        const currEmail = emailInput.value.trim();

        if(validEmail(currEmail)){
            errorMessage.textContent = "";
            window.location.href = "subscriptionPage.html"
            emailInput.style.color="hsl(0, 0%, 100%)"
            emailInput.style.backgroundColor = "hsl(0, 0%, 100%)"
            emailInput.style.borderColor = "lightgray"

            localStorage.setItem("userEmail", currEmail)
        }
        else{
            errorMessage.textContent = "Valid email required"
            emailInput.style.color = "lightred"
            emailInput.style.borderColor = "red"
            emailInput.style.background = "#FFCCCB"
        }
    })

    function validEmail(email){
        const emailSymbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailSymbols.test(email);
    }
    
})