import React from 'react'
import { Container, Box } from '@mui/material'
import NavBar from "../../components/NavBar";


export default function Home () {
   return (
      <React.Fragment>
         <NavBar />
         <Container >
            <Box>
               <br />
               <img src="https://storage.googleapis.com/react-static/logo_dark_512.png" height="200" width="200"/>
               <h2>ORLEM YOUTH WEEK</h2>
               
            </Box>
         </Container>
      </React.Fragment>
    )
}