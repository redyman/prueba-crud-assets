const express = require('express');
const router = express.Router();
const axios = require('axios');

// Endpoint primera seccion "destacadas"
router.get('/', async (req, res) => {
  try {
      res.json({resp:true, data: []});
  } catch (error) {
      console.error('Error al obtener artículos destacados de Primicias:', error);
      res.status(500).json({ 
          error: 'Error al procesar la solicitud',
          message: error.message 
      });
  }
});

module.exports = router;