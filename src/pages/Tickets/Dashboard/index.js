import React from 'react'
import { Container } from '@mui/material'
import { Navigate, Link } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import { Button, Box } from '@mui/material';

export default function Dashboard (props) {
    let user_role = localStorage.getItem("user_role")
    console.log(user_role)

   return (
       <React.Fragment>
           {
            !localStorage.getItem("token") ? (
                    <Navigate to="/tickets/sign_in" />
            ) : (
                    <Container>
                        <NavBar />
                        <h2>Dashboard</h2>
                        <Box>
                            {
                                (user_role === "SA" | user_role === "RU" | user_role === "RH" ) ? (
                                    <Link to={"/tickets/register"}><Button variant="outlined">Register</Button></Link>
                                ) : (
                                    <></>
                                )
                            }<br /><br />
                            {
                                (user_role === "SA" | user_role === "SU" | user_role === "SH" ) ? (
                                    <Link to={"/tickets/scan"}><Button variant="outlined">Scan</Button></Link>
                                ) : (
                                    <></>
                                )
                            }<br /><br />
                            {
                                (user_role === "SA") ? (
                                    <Link to={"/tickets/admin"}><Button variant="outlined">Admin</Button></Link>
                                ) : (
                                    <></>
                                )
                            }
                        </Box>
                    </Container>
                )
            }
        </React.Fragment>
    )
}