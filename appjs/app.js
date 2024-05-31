document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:8000/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const messageElement = document.getElementById('message');

    if (response.ok) {
        messageElement.textContent = 'User registered successfully!';
        messageElement.style.color = 'green';
    } else {
        const errorData = await response.json();
        messageElement.textContent = `Error: ${errorData.detail}`;
        messageElement.style.color = 'red';
    }
});
