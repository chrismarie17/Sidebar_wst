function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const chevron = document.querySelector('.chevron')
    sidebar.classList.toggle('active');

  
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0px"; 
    }
}
  function navigateTo(section) {
  
    toggleSidebar(); 
  
    const content = document.querySelector(".content");
  
    if (section === 'home') {
      content.innerHTML = "<h1>Welcome to the Home Page</h1><p>This is your home page content.</p>";
    } else if (section === 'profile') {
      content.innerHTML = "<h1>Your Profile</h1><p>Here is your profile information.</p>";
    } else if (section === 'settings') {
      content.innerHTML = "<h1>Settings</h1><p>This is where you can adjust your settings.</p>";
    }
  }
  
 
  function logout() {
    alert("Logging out...");
    function logout() {
        localStorage.removeItem('user');
      
        window.location.href = 'signup.html';
      }
  
    toggleSidebar(); 

    const content = document.querySelector(".content");
    content.innerHTML = "<h1>Welcome to the Dashboard</h1><p>This is your main dashboard content.</p>";
    window.location.href = 'signup.html';

const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  window.location.href = 'login.html';
 }
  
}
  