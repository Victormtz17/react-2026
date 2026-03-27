import React from 'react'
import { Box, Container, Typography, Avatar, Paper } from '@mui/material'

export const Profile = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%', textAlign: 'center' }}>
          <Avatar
            sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
            alt="Usuario"
          />
          <Typography variant="h5" gutterBottom>
            ¡Bienvenido al Perfil!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Has iniciado sesión correctamente.
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}
