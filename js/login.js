  var usuarios = [
            { usuario: 'admin', password: 'admin123' },
            { usuario: 'juan', password: 'juan456' },
            { usuario: 'maria', password: 'maria789' }
        ];

        function abrirLogin() {
            document.getElementById('modalInicioSesion').style.display = 'block';
        }

        function cerrarLogin() {
            document.getElementById('modalInicioSesion').style.display = 'none';
            document.getElementById('formularioLogin').reset();
        }

        //Obtiene los valores ingresados en los campos de usuario y contraseña del login, y el contenedor donde se mostrará un mensaje.
        function validarLogin() {
            var usuario = document.getElementById('usuarioLogin').value;
            var password = document.getElementById('contrasenaLogin').value;
            var mensaje = document.getElementById('mensajeLogin');

            if (usuario == '' || password == '') {
                mensaje.style.color = 'red';
                mensaje.innerText = 'Completa todos los campos';
                return;
            }

            //Recorre la lista de usuarios para verificar si existe uno con el nombre y la contraseña ingresados.
            var encontrado = false;
            for (var i = 0; i < usuarios.length; i++) {
                if (usuarios[i].usuario == usuario && usuarios[i].password == password) {
                    encontrado = true;
                    break;
                }
            }

//Si se encontró un usuario válido, muestra un mensaje de éxito y cierra el login. Si no, muestra un mensaje de error.
            if (encontrado) {
                mensaje.style.color = 'green';
                mensaje.innerText = 'Bienvenido ' + usuario;
                alert('Login correcto');
                cerrarLogin();
            } else {
                mensaje.style.color = 'red';
                mensaje.innerText = 'Usuario o contraseña incorrectos';
            }
        }

        function abrirRegistro() {
            document.getElementById('modalInicioSesion').style.display = 'none';
            document.getElementById('modalRegistro').style.display = 'block';
        }

        function cerrarRegistro() {
            document.getElementById('modalRegistro').style.display = 'none';
            document.getElementById('formularioRegistro').reset();
        }

//Obtiene los datos ingresados en el formulario de registro y el contenedor para mostrar mensajes
        function validarRegistro() {
            var usuario = document.getElementById('usuarioRegistro').value;
            var password = document.getElementById('contrasenaRegistro').value;
            var confirmar = document.getElementById('confirmarContrasena').value;
            var mensaje = document.getElementById('mensajeRegistro');

            if (usuario == '' || password == '' || confirmar == '') {
                mensaje.style.color = 'red';
                mensaje.innerText = 'Completa todos los campos';
                return;
            }

            if (password != confirmar) {
                mensaje.style.color = 'red';
                mensaje.innerText = 'Las contraseñas no son iguales';
                return;
            }

            var existe = false;
            for (var i = 0; i < usuarios.length; i++) {
                if (usuarios[i].usuario == usuario) {
                    existe = true;
                    break;
                }
            }
            
//Si el usuario no existe, lo agrega a la lista de usuarios, muestra un mensaje de éxito, cierra el registro y abre el login. Si ya existe, muestra un mensaje de error.
            if (existe) {
                mensaje.style.color = 'red';
                mensaje.innerText = 'El usuario ya existe';
            } else {
                usuarios.push({ usuario: usuario, password: password });
                mensaje.style.color = 'green';
                mensaje.innerText = 'Usuario registrado correctamente';
                alert('Registro exitoso');
                cerrarRegistro();
                abrirLogin();
            }
        }