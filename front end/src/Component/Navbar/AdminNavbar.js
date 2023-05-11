import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const AdminNavbar = ({ handleSearch }) => {

  return (
    <div>
      <Navbar style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Container>
          <Navbar.Brand to="#" style={{
            color: "#F39C12",
           
            fontSize: "20px",
            margin: "5px",
            textDecoration: 'none',
          }}>VEHICLE MANAGEMANT SYSTEM </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/admin/dashboard" style={{
              color: "#F39C12",
             
              fontSize: "20px",
              margin: "5px",
              textDecoration: 'none',
            }}>Dashboard</Link>
            <Link to="/admin/adminCustomer" style={{
              color: "#F39C12",
              
              fontSize: "20px",
              margin: "5px",
              textDecoration: 'none',
            }}>Customer</Link>
            <Link to="/admin/mechanic" style={{
              color: "#F39C12",
            
              fontSize: "20px",
              margin: "5px",
              textDecoration: 'none',
            }}>Mechanic</Link>
            <Link to="/admin/request" style={{
              color: "#F39C12",
             
              fontSize: "20px",
              margin: "5px",
              textDecoration: 'none',
            }}>Request</Link>
            <Link to="/admin/feedbackReview" style={{
              color: "#F39C12",
              
              fontSize: "20px",
              margin: "5px",
              textDecoration: 'none',
            }}>FeedBack</Link>


          </Nav>

          <nav>
            <Link
              to="/Home"
              className="m-3"
              style={{
                color: "#F39C12",
               
                fontSize: "20px",
                margin: "5px",
                textDecoration: 'none',
              }}
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </Link>
          </nav>
        </Container>
       
      </Navbar>
    </div>
  );
}

export default AdminNavbar;