import React, {useState, useEffect} from 'react'
import { Container } from '@mui/material'
import { Navigate } from 'react-router';
import NavBar from "../../../components/NavBar";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import { API_BASE_URL } from '../../../constants';
import axios from "axios"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';



const theme = createTheme();

export default function Register () {
    const [singingCount, setSingingCount] = useState(0)
    const [dramaCount, setDramaCount] = useState(0)
    const [danceCount, setDanceCount] = useState(0)
    const [loading, setLoading] = useState(0)
    const [amount, setAmount] = useState(0)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [result, setResult] = useState("")

    const radioGroupRef = React.useRef(null);

    const [open, setOpen] = React.useState(false);

    function submitForm () {
        let body = {
            phone: "",
            email: email,
            name: name,
            singing_count: singingCount,
            drama_count: dramaCount,
            dance_count: danceCount
        }
        let res = window.confirm("CONFIRM PASS REGISTRATION\nEmail: " + email + "\nName: " + name + "\nSinging: " + singingCount + "\nDrama: " + dramaCount + "\nDance: " + danceCount + "\nAmount: " + amount + ".00");
        if (res) {
            axios.post(API_BASE_URL + "/passes/register/", body, {headers : {"token": localStorage.getItem("token")}}).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.token)
                if(response.data.result) {
                    setResult("Successfully Registered!")
                }
                if(response.data.result) {
                    setResult(response.data.message)
                }
            })
        }
    }

    useEffect(() => {
        setAmount(singingCount * 80 + dramaCount * 80 + danceCount * 100)
    }, [singingCount, dramaCount, danceCount]);

    function singingSlider(value) {
        setSingingCount(value)
      }
      function dramaSlider(value) {
          setDramaCount(value)
        }
        function danceSlider(value) {
            setDanceCount(value)
          }

  return (
      <>
      {
          !localStorage.getItem("token") ? (
              <Navigate to="/tickets" />
          ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
          <NavBar />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register Pass
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <Typography>Singing</Typography>
            <Slider
                aria-label="Singing"
                defaultValue={0}
                getAriaValueText={singingSlider}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={3}
            /><hr/>
            
            <Typography>Drama</Typography>
            <Slider
                aria-label="Drama"
                defaultValue={0}
                getAriaValueText={dramaSlider}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={3}
            /><hr/>
            
            <Typography>Dance</Typography>
            <Slider
                aria-label="Dance"
                defaultValue={0}
                getAriaValueText={danceSlider}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={3}
            /><hr/>

            <Typography variant="h5">Total Amount: {amount}</Typography>
            
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => submitForm()}
            >
              Register
            </Button>
            <Typography variant="h4" color="error">{result}</Typography>
          </Box>
        </Box>
      </Container> 
      
    </ThemeProvider>
    
    )
}
    </>
  );
}