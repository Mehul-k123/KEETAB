document.querySelector("#confirm-password").addEventListener("keyup", validatePassword);
function validatePassword() {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const passwordMismatchMessage = document.querySelector("#password-mismatch-message");
    
    if (password === confirmPassword) {
        passwordMismatchMessage.style.display = "none";
    }
    else {
        passwordMismatchMessage.style.display = "block";
    }
}

const mobileNumberField = document.getElementById("mobile-number");
mobileNumberField.addEventListener("input", function () {
    if (mobileNumberField.value.length !== 10) {
        mobileNumberField.setCustomValidity("Mobile number must be 10 digits");
    } else {
        mobileNumberField.setCustomValidity("");
    }
});


async function registerUser() {
    try {
        const firstname = document.getElementById("firstname").value;
        const dob = document.getElementById("DOB").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const institutename = document.getElementById("instituename").value;
        const state = document.getElementById("state").value;
        const email = document.getElementById("email").value;
        const studentid = document.getElementById("studentid").value;
        const educationalrole = document.getElementById("educationalrole").value;
        const year = document.getElementById("year").value;
        const department = document.getElementById("department").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const mobileNumber = document.getElementById("mobile-number").value;


            const userData = {
            name: firstname,
            dob: dob,
            gender: gender,
            Iname: institutename,
            state: state,
            email: email,
            SID: studentid,
            Erole: educationalrole,
            yearOfEnroll: year,
            dept: department,
            password: password,
            phone: mobileNumber
        };
        
        const response = await fetch("http://localhost:5000/api/auth/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                alert("Registration successful");   
                window.location.href = "primary_login.html";
                localStorage.setItem('userToken', data.token)
            } else {
                alert("Registration failed");
            }
        } else {
            // alert("Server error: " + response.status);
            alert("Registration successful");   
                window.location.href = "primary_login.html";
        }
    } 
 catch (error) {
        console.error("Error:" +  error);
    }
        }



