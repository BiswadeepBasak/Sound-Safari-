// Get all subscription buttons
const subscribeButtons = document.querySelectorAll('.subscription-plan button');

// Add click event listener to each button
subscribeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Redirect to the payment page
        window.location.href = 'payment.html';
    });
});
