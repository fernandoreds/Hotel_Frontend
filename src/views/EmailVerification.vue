<template>
  <div class="container">
    <h1>Verificación de Email</h1>
    <form @submit.prevent="verifyEmail">
      <input type="email" v-model="email" placeholder="Email" required />
      <button type="submit">Verificar Email</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </form>

    <!-- Botones de navegación -->
    <div class="btn-container">
      <router-link to="/login" class="btn">Ir a Login</router-link>
      <router-link to="/" class="btn">Registro de Usuario</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    verifyEmail() {
      this.errorMessage = '';
      this.successMessage = '';

      // Simulación de verificación de email
      if (this.email === 'existente@example.com') {
        this.errorMessage = 'El email no está registrado.';
        return;
      }

      this.successMessage = 'Email verificado! Ahora puedes establecer tu contraseña.';
      this.email = '';
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
  align-items: center;
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
  background-color: #047747;
}

.error {
  color: red;
  text-align: center;
}

.success {
  color: green;
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
  background-color: #036d4d;
}
</style>
