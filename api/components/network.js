const express = require('express')
const router = express()

router.post('/encode', (req, res) => {
  const message = req.body.mensaje
  const rows = req.body.vueltas
  const columns = message.length / rows

  // Creo las dimensiones de la matriz basada en las vueltas
  let matrix = []
  for (let i = 0; i < rows; i++) {
    matrix[i] = []
  }

  // Creo la matriz cifrada
  console.log('Cifrando:', message)
  let messagePosition = 0
  for(let i=0; i < columns; i++) {
    for(let j=0; j < rows; j++) {
        matrix[j][i] = message[messagePosition] || ' '
        messagePosition++
    }
  }

  // Transformo la matriz a un string
  let encodedMessage = ''
  for(let i = 0; i < rows; i++) {
    encodedMessage += matrix[i].join('')
  }
  const finalMessage = encodedMessage.trim()

  // Respuesta
  console.log('Mensaje cifrado:', finalMessage)
  res.status(200).json({
    mensaje: finalMessage
  })
})

router.post('/decode', (req, res) => {
  const message = req.body.mensaje
  const rows = req.body.vueltas
  const columns = message.length / rows

  // Creo las dimensiones de la matriz basada en las vueltas
  let matrix = []
  for (let i = 0; i < rows; i++) {
    matrix[i] = []
  }
  console.log('Descifrando:', message)
  // Recontruyo la matriz cifrada con el mensaje
  let messagePosition = 0
  for(let i=0; i < rows; i++) {
    for(let j=0; j < columns; j++) {
        matrix[i][j] = message[messagePosition] || ' '
        messagePosition++
    }
  }

  // Vuelvo a armar el mensaje descifrado con la matriz cifrada
  let decodedMessage = ''
  for(let i = 0; i < matrix[0].length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      decodedMessage += matrix[j][i]
    }
  }
  const finalMessage = decodedMessage.trim()

  // Respuesta
  console.log('Mensaje descifrado:', finalMessage)
  res.status(200).json({
    mensaje: finalMessage
  })
})


module.exports = router
