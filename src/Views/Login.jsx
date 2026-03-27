import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Login = ({ setIsLogin }) => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (usuario && password) {
      setIsLogin(true)   
      navigate('/profile')
    } else {
      alert('Por favor completa todos los campos')
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10} gap={2}>
      <Typography variant="h5">Iniciar Sesión</Typography>
      <TextField
        label="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </Box>
  )
}