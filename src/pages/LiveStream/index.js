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
               <img src="https://storage.googleapis.com/react-static/logo_dark_512.png" height="100" width="100"/>
               <h2>OYW LIVESTREAM</h2>
               <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/86YLFOog4GM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
         </Container>
      </React.Fragment>
    )
}