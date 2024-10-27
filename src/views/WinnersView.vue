<template>
  <div class="main-container">
    <div class="winners-container">
      <h1>Ganadores</h1>
      <ul class="winner-list">
        <li v-for="winner in winners" :key="winner.email">{{ winner.nombre }} - {{ winner.email }}</li>
      </ul>
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
      winners: [
        { nombre: 'Juan', email: 'juan@example.com' },
        { nombre: 'María', email: 'maria@example.com' },
      ]
    };
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(to right, #2b2b2b, #525151);
}

.winners-container {
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

ul.winner-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

li {
  padding: 10px;
  border: 1px solid #059e52;
  border-radius: 5px;
  margin: 5px 0;
  color: #f1f1f1;
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
