import React from "react";
import axios from "axios";
import {Container, Box} from "@mui/material";
import EVENT_DETAILS from "../../constants";


const SoldContainer = (day, name, count, redeemed_count) => {
    return (
        <div
            style={{
                border: "1px solid #182b4e",
                padding: "16px",
                borderRadius: "8px",
                flex: 1,
                boxShadow: isMobile
                ? "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px"
                : "",
            }}>   
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ flex: 0.3 }}>
          <p
            style={{
              fontSize: "32px",
              color: "#f9a444",
              margin: "0 auto",
              padding: "4px 16px",
              fontWeight: 600,
            }}
          >
            DAY {day}
          </p>
          <p style={{ fontWeight: 100 }}>{name}</p>
        </div>
        <div style={{ flex: 0.3, alignItems: "center" }}>
          <div style={{ flex: 0.3, alignItems: "center" }}>
            <p style={{ fontSize: "48px" }}> {count} </p>
            <p style={{ fontSize: "20px", paddingLeft: "10px" }}>SOLD </p>
          </div>
          <div style={{ flex: 0.3, alignItems: "center" }}>
            <p style={{ fontSize: "48px" }}> {redeemed_count} </p>
            <p style={{ fontSize: "20px", paddingLeft: "10px" }}>REDEEMED </p>
          </div>
        </div>
        </div>
    )
}


export default function PassSummary () {
    

    return (
        <Container>
            Pass Summary
        </Container>
    )
}