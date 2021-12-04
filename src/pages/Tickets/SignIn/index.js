import {React, useState, useEffect, useHistory} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from "../../../components/Footer";
import axios from "axios"
import {API_BASE_URL} from "../../../constants"
import CircularProgress from '@mui/material/CircularProgress';
import NavBar from "../../../components/NavBar";
import {Navigate} from "react-router-dom"


const theme = createTheme();

export default function SignIn(props) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post(API_BASE_URL + "/auth/sign_in/", {
        phone: data.get('phone'),
        password: data.get('password')
    }).then(response => {
      if (response.data.result) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user_role", response.data.data.user_role)
        window.location.reload()
      }})
    setLoading(false);
  };

  return (
    <>
      {
        localStorage.getItem('token') ? (
          <Navigate to="/tickets" />
        ) : (       
        <ThemeProvider theme={theme}>
          {
            loading ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <NavBar />
              <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Footer sx={{ mt: 5 }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              </>
            )
          }
        </ThemeProvider>
        
        )
      }
      </>
  );
}