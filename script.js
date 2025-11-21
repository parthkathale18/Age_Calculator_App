const UserInput =  document.getElementById("date");
const CalculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const h2 = document.querySelector("h2");

UserInput.max = new Date().toISOString().split("T")[0];
CalculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
    result.style.display = "none";
     if (!UserInput.value) {
        result.innerText = "Please enter a valid date.";
        result.style.color = "red";
        result.style.display = "block";
        return;
    }
    
    const dob =  new Date(UserInput.value);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if(days<0){
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if(months<0){
        years--;
        months += 12;
    }

    h2.innerText = `You are ${years} Years, ${months} Months, and ${days} Days old.`;
    h2.style.display = "block";
    h2.style.color = "#f5f8bf";
}