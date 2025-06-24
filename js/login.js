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
  document.getElementById('registerForm').reset();
  document.getElementById('registerMessage').innerText = '';
}

function validateLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
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

function openRegisterModal() {
  document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
  document.getElementById('registerForm').reset();
}

function validateRegistration() {
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const message = document.getElementById('registerMessage');

  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.innerText = 'Las contraseñas no coinciden';
    return;
  }

  // Verificar si el nombre de usuario ya existe
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    message.style.color = 'red';
    message.innerText = 'El nombre de usuario ya existe';
    return;
  }

  // Registrar el nuevo usuario
  users.push({ username: username, password: password });
  message.style.color = 'green';
  message.innerText = 'Registro exitoso. Ahora puedes iniciar sesión';
}
