document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const successMessage = document.getElementById('success-message');

  // Submit Event Listener
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform validation and store result
    const isFormValid = validateInputs();

    if (isFormValid) {
      successMessage.textContent = 'Registration successful!';
      form.reset();
      
      // Clear success indicators after reset
      document.querySelectorAll('.form-control').forEach((control) => {
        control.classList.remove('success');
      });
    } else {
      successMessage.textContent = '';
    }
  });

  // Highlight or clear errors dynamically
  function setError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error-msg');
    
    errorDisplay.textContent = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector('.error-msg');
    
    errorDisplay.textContent = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
  }

  // Regex Helper Functions
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function isValidPhone(phone) {
    const re = /^[0-9]{10}$/; // Simple 10-digit phone validation
    return re.test(phone);
  }

  function isValidPassword(password) {
    // Minimum 8 characters, at least one letter and one number
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  }

  // Main Validation Function
  function validateInputs() {
    let isValid = true;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    // Name Validation
    if (usernameValue === '') {
      setError(username, 'Name is required');
      isValid = false;
    } else if (usernameValue.length < 3) {
      setError(username, 'Name must be at least 3 characters');
      isValid = false;
    } else {
      setSuccess(username);
    }

    // Email Validation
    if (emailValue === '') {
      setError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
      isValid = false;
    } else {
      setSuccess(email);
    }

    // Phone Validation
    if (phoneValue === '') {
      setError(phone, 'Phone number is required');
      isValid = false;
    } else if (!isValidPhone(phoneValue)) {
      setError(phone, 'Phone number must be exactly 10 digits');
      isValid = false;
    } else {
      setSuccess(phone);
    }

    // Password Validation
    if (passwordValue === '') {
      setError(password, 'Password is required');
      isValid = false;
    } else if (!isValidPassword(passwordValue)) {
      setError(password, 'At least 8 chars with 1 letter & 1 number');
      isValid = false;
    } else {
      setSuccess(password);
    }

    return isValid;
  }
});