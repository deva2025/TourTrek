// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        // Sending form data to the PHP backend script using fetch API
        fetch('submit_contact_form.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            if (response.ok) {
                return response.text(); // Extract response body as text
            } else {
                throw new Error('Failed to send message.');
            }
        })
        .then(function (message) {
            alert(message); // Display message from the server
            form.reset(); // Reset the form
        })
        .catch(function (error) {
            alert('An error occurred while sending the message. Please try again later.');
            console.error(error);
        });
    });
});


