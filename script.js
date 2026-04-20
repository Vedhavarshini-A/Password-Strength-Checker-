function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthBar = document.getElementById("strength-bar");
    let strengthText = document.getElementById("strength-text");
    let suggestions = document.getElementById("suggestions");

    let score = 0;
    let tips = [];

    if (password.length >= 8) score++;
    else tips.push("Use at least 8 characters");

    if (/[A-Z]/.test(password)) score++;
    else tips.push("Add uppercase letter");

    if (/[a-z]/.test(password)) score++;
    else tips.push("Add lowercase letter");

    if (/[0-9]/.test(password)) score++;
    else tips.push("Include numbers");

    if (/[!@#$%^&*]/.test(password)) score++;
    else tips.push("Use special symbols");

    // Strength UI
    if (score <= 2) {
        strengthBar.style.background = "red";
        strengthText.innerText = "Weak Password ❌";
    } 
    else if (score <= 4) {
        strengthBar.style.background = "orange";
        strengthText.innerText = "Medium Password ⚠️";
    } 
    else {
        strengthBar.style.background = "green";
        strengthText.innerText = "Strong Password ✅";
    }

    // Suggestions
    suggestions.innerHTML = "";
    tips.forEach(tip => {
        let li = document.createElement("li");
        li.innerText = tip;
        suggestions.appendChild(li);
    });
}

// Show / Hide Password
function togglePassword() {
    let input = document.getElementById("password");
    input.type = input.type === "password" ? "text" : "password";
}