<template>
    <div class="card">
      <h1>Seleccionar Ganador</h1>
      <ul class="contestant-list">
        <li v-for="contestant in contestants" :key="contestant">{{ contestant }}</li>
      </ul>
      <button @click="selectWinner">Seleccionar Ganador</button>
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
        contestants: ['Juan', 'María', 'Pedro', 'Ana'], // Lista de concursantes
        winner: ''
      };
    },
    methods: {
      selectWinner() {
        const randomIndex = Math.floor(Math.random() * this.contestants.length);
        this.winner = this.contestants[randomIndex];
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  ul.contestant-list {
    list-style-type: none; /* Sin viñetas */
    padding: 0; /* Sin padding */
  }
  
  li {
    margin: 5px 0; /* Espaciado entre concursantes */
  }
  
  button {
    padding: 10px;
    background-color: #0c8b70;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0;
  }
  
  button:hover {
    background-color: #15ac54;
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
    margin: 0 10px;
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
  