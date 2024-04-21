document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get username and password from form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate login check (replace this with actual login validation logic)
        if (username === 'user' && password === 'password') {
            // If login is successful, redirect to home page
            window.location.href = 'index.html'; // Change to your home page URL
        } else {
            // If login fails, display error message
            errorMessage.textContent = 'Username or password incorrect';
        }
    });
});
