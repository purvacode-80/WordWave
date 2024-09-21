const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');

});


// Function to handle user signup and save data (username, email, password, and theme)
function signup() {
    let username = document.getElementById("signupUsername").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (!username || !email || !password) {
        alert("All fields are required!");
        return;
    }

    let userData = {
        username: username,
        email: email,
        password: password,  // In a real application, NEVER store passwords in plain text
    };

    // Save user data to localStorage (mimicking a database)
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Signup successful! You can now log in.");
}

// Function to verify login credentials
function login() {
    let enteredUsername = document.getElementById("loginUsername").value;
    let enteredPassword = document.getElementById("loginPassword").value;

    // Get saved user data from localStorage
    let savedData = localStorage.getItem("userData");

    if (savedData) {
        let userData = JSON.parse(savedData);

        // Verify that the entered username and password match the saved data
        if (enteredUsername === userData.username && enteredPassword === userData.password) {
            window.location.href = "https://www.example.com";
        } else {
            alert("Incorrect username or password!");
        }
    } else {
        alert("No user data found! Please signup first.");
    }
}

// Function to apply the theme after login
function applyTheme(theme) {
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
}

// Optional: Function to check if a user is already logged in
function checkForLoggedInUser() {
    let savedData = localStorage.getItem("userData");

    if (savedData) {
        let userData = JSON.parse(savedData);
        //applyTheme(userData.theme);  // Apply theme when returning to the site
    }
}
