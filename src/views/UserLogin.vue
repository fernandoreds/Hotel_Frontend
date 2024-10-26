<template>
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
  
        <button type="submit">Iniciar Sesión</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
  
      <!-- Botones de navegación -->
      <div class="btn-container">
        <router-link to="/" class="btn">Registro de Usuario</router-link>
        <router-link to="/verify-email" class="btn">Verificar Email</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      login() {
        this.errorMessage = '';
  
        // Simulación de inicio de sesión
        if (this.email !== 'admin@example.com' || this.password !== 'password') {
          this.errorMessage = 'Credenciales incorrectas.';
          return;
        }
  
        alert('Inicio de sesión exitoso!');
        this.email = '';
        this.password = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos dentro del formulario */
  }
  
  input {
    width: 100%; /* Asegura que los inputs ocupen todo el ancho */
    max-width: 400px; /* Establece un ancho máximo */
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px; /* Tamaño de fuente más legible */
  }
  
  button {
    padding: 10px;
    background-color: #0c8b70;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%; /* Hacer que el botón ocupe todo el ancho */
    max-width: 400px; /* Establece un ancho máximo */
  }
  
  button:hover {
    background-color: #15ac54;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  /* Estilo para botones de navegación */
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Añade un poco de margen superior */
  }
  
  .btn {
    padding: 10px 20px; /* Botones más grandes */
    margin: 0 10px; /* Espaciado entre botones */
    background-color: #0aa78c;
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  