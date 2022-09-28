async function signupHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim()
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupHandler);