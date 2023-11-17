function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validation criteria
    var nameRegex = /^[a-zA-Z\s]{5,}$/;
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /^\d{10}$/;
  
    // Name validation
    if (!nameRegex.test(fullName)) {
      alert("Please enter a valid name (minimum 5 characters).");
      return;
    }
  
    // Email validation
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Phone validation
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    // Password validation
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
      alert("Please enter a strong password.");
      return;
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // If all validations pass, you can submit the form or perform further actions
    alert("Form submitted successfully!");
  }
  