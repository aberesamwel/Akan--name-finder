//script.js
document.getElementById('details').addEventListener('submit', function(event) {
    event.preventDefault(); 



    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const resultsDiv = document.getElementById('results');



    let akanName = "";
    const date = new Date(birthdate);
    const dayOfWeek = date.getDay(); 

    if (gender === "male") {
        const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        akanName = maleNames[dayOfWeek];
    } else {
        const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        akanName = femaleNames[dayOfWeek];
    }

    if (isNaN(date.getTime()) || akanName === undefined){
        resultsDiv.textContent = "Please enter a valid birthdate.";
    } else {
        resultsDiv.textContent = `Your Akan name is: ${akanName}`;
    }
});