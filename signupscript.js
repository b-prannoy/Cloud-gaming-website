function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var usernameError = document.getElementById("username-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

    // Reset error messages
    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    // Validation rules
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate username
    if (!username) {
        usernameError.innerText = "Username is required.";
        return false;
    } else if (!usernameRegex.test(username)) {
        usernameError.innerText = "Username can only contain alphanumeric characters and underscores.";
        return false;
    }

    // Validate email
    if (!email) {
        emailError.innerText = "Email is required.";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Invalid email format.";
        return false;
    }

    // Validate password
    if (!password) {
        passwordError.innerText = "Password is required.";
        return false;
    } else if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long.";
        return false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        confirmPasswordError.innerText = "Please confirm your password.";
        return false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.innerText = "Passwords do not match.";
        return false;
    }

    // Form is valid, proceed with submission
    return true;
}