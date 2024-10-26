<template>
  <div class="admin-container">
    <h1>Panel de Administración</h1>
    <h2>Concursantes Registrados</h2>
    <ul class="contestant-list">
      <li v-for="contestant in contestants" :key="contestant.email">
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
</template>

<script>
export default {
  data() {
    return {
      contestants: [
        { nombre: 'Juan', email: 'juan@example.com' },
        { nombre: 'María', email: 'maria@example.com' },
        // más concursantes
      ],
      winner: ''
    };
  },
  methods: {
    verifyEmail(email) {
      // Lógica para verificar el correo electrónico del concursante
      alert(`Verificando el correo: ${email}`);
    },
    removeContestant(email) {
      // Lógica para eliminar al concursante
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
.admin-container {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

ul.contestant-list {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
}

.success {
  color: green;
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
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
