document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Basic validation for password match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Create user object
    const user = { email, password };
  
    // Store user in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    // Redirect to login page after sign up (optional)
    alert('Account created successfully!');
    window.location.href = 'login.html';
  });
  