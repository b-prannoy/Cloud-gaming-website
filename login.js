function validateUsername(username) {
    // Regular expression to match alphanumeric characters and underscores
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
}

// Function to validate password
function validatePassword(password) {
    // Regular expression to ensure password has at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function validateForm() {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    var usernameErrorText = document.getElementById("username-error-text");
    var passwordErrorText = document.getElementById("password-error-text");

    if (!validateUsername(username)) {
        usernameErrorText.innerText = "Invalid username.";
        usernameErrorText.style.color = 'red';
    } else {
        usernameErrorText.innerText = ""; // Clear error message
    }

    if (!validatePassword(password)) {
        passwordErrorText.innerText = "Invalid password.";
        passwordErrorText.style.color = 'red';
    } else {
        passwordErrorText.innerText = ""; // Clear error message
    }

    // Check if any error messages are still displayed
    if (usernameErrorText.innerText !== "" || passwordErrorText.innerText !== "") {
        return false; // If errors still exist, prevent form submission
    }

    // Form is valid, proceed with submission
    return true;
}
