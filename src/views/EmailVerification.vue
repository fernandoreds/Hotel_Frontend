<template>
  <div class="main-container">
    <div class="login-container">
      <h1>Verificación de Email</h1>
      <p>ingresa tu correo electrónico para recibir un enlace de verificación.</p>
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
      />
      <button @click="requestVerification">Enviar enlace de verificación</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div class="btn-container">
        <router-link to="/login" class="btn">Iniciar Sesión</router-link>
        <router-link to="/" class="btn">Registro de Usuario</router-link>
      </div>
    </div>
    <div class="right-side"></div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      errorMessage: ''
    };
  },
  methods: {
    requestVerification() {
      this.errorMessage = '';

     
      if (!this.email) {
        this.errorMessage = 'Por favor, ingresa tu correo electrónico.';
        return;
      }

      
      alert(`Se ha enviado un nuevo enlace de verificación a ${this.email}.`);
      this.email = ''; 
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #2b2b2b, #575555);
}

.login-container {
  width: 400px;
  padding: 40px;
  background: rgb(54, 54, 54);
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #f3f3f3;
}

p {
  text-align: center;
  margin-bottom: 20px;
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
  margin-top: 20px;
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
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background-color: #026d37;
}

</style>
