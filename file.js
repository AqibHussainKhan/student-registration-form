function submitForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let course = document.getElementById("course").value;

    let result = document.getElementById("result");

    // Validation
    if (name === "" || email === "" || password === "" || course === "") {
        result.style.color = "red";
        result.innerHTML = "Please fill all fields!";
        return;
    }

    if (password.length < 6) {
        result.style.color = "red";
        result.innerHTML = "Password must be at least 6 characters!";
        return;
    }

    // Success
    result.style.color = "green";
    result.innerHTML = `
        <h3>Registration Successful ✅</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Course:</b> ${course}</p>
    `;
}