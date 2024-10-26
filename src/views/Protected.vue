<template>
    <div>
      <h1>Generar Ganador del Sorteo</h1>
      <button @click="selectWinner">Seleccionar Ganador</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    setup() {
      const selectWinner = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:8000/api/select-winner/', {}, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.data.success) {
            alert(`El ganador es: ${response.data.winner.email}`);
          } else {
            alert('No se pudo seleccionar un ganador.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error al seleccionar ganador.');
        }
      };
  
      return {
        selectWinner
      };
    }
  };
  </script>
  