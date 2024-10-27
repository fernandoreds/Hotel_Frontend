<template>
  <div class="main-container">
    <div class="admin-container">
      <h1>Panel de Administración</h1>
      <h2>Concursantes Registrados</h2>
      <ul class="contestant-list">
        <li v-for="contestant in contestants" :key="contestant.email" class="contestant-item">
          {{ contestant.nombre }} - {{ contestant.email }}
          <button @click="verifyEmail(contestant.email)">Verificar Email</button>
          <button @click="removeContestant(contestant.email)">Eliminar</button>
        </li>
      </ul>
      <h2>Seleccionar Ganador</h2>
      <button @click="selectWinner">Seleccionar Ganador Aleatorio</button>
      <p v-if="winner" class="success">¡El ganador es: {{ winner }}!</p>
      <div class="btn-container">
        <router-link to="/login" class="btn">Ir a Login</router-link>
        <router-link to="/" class="btn">Registro de Usuario</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contestants: [
        { nombre: 'Juan', email: 'juan@example.com' },
        { nombre: 'María', email: 'maria@example.com' },
      ],
      winner: ''
    };
  },
  methods: {
    verifyEmail(email) {
      alert(`Verificando el correo: ${email}`);
    },
    removeContestant(email) {
      this.contestants = this.contestants.filter(c => c.email !== email);
    },
    selectWinner() {
      const randomIndex = Math.floor(Math.random() * this.contestants.length);
      this.winner = this.contestants[randomIndex].nombre;
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #2b2b2b, #525151);
}

.admin-container {
  width: 400px;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #f1f1f1;
}

h2 {
  margin-bottom: 10px;
  color: #f1f1f1;
}

ul.contestant-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.contestant-item {
  padding: 10px;
  border: 1px solid #059e52;
  border-radius: 5px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f1f1f1;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #0c8b70;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #15ac54;
}

.success {
  color: green;
  text-align: center;
  margin-top: 20px;
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
