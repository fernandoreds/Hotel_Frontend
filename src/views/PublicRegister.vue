<template>
  <div class="main-container">
    <div class="login-container">
      <h1>Registro de Usuario</h1>
      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="Nombre" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>

      <div class="btn-container">
        <router-link to="/login" class="btn">Iniciar Sesión</router-link>
        <router-link to="/verify-email" class="btn">Verificar Email</router-link>
      </div>
    </div>
    <div class="right-side"></div> <!-- Sección derecha vacía -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    register() {
      this.errorMessage = '';

      // Simulación de registro
      if (!this.name || !this.email || !this.password) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      alert('Registro exitoso!');
      this.name = '';
      this.email = '';
      this.password = '';
    }
  }
};
</script>

<style scoped>
/* Similar a los estilos del componente de inicio de sesión */
.main-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #2b2b2b, #3a3939);
}

.login-container {
  width: 400px;
  padding: 40px;
  background: rgb(56, 53, 53);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #eefcf9;
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

input {
  width: 90%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #059e52;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 15px;
  background-color: #0c8b70;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #15ac54;
}

.error {
  color: red;
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #0aa78c;
  color: rgb(238, 235, 235);
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background-color: #026d37;
}

</style>
