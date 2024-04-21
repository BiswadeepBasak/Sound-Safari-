// script_payment.js

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // In a real scenario, you would handle the form submission, possibly using AJAX to send data to a server.
    alert('Payment Successful!');
});
