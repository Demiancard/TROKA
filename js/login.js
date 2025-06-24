const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'juan', password: 'juan456' },
    { username: 'maria', password: 'maria789' }
  ];

  function openModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('loginMessage').innerText = '';
  }

  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginForm').reset();
  }

  function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('loginMessage');


    const found = users.find(user => user.username === username && user.password === password);

    if (found) {
      message.style.color = 'green';
      message.innerText = '¡Bienvenido!';
    } else {
      message.style.color = 'red';
      message.innerText = 'Usuario o contraseña incorrectos';
    }
  }