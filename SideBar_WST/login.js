document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  window.location.href = 'dashboard.html';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
})
});