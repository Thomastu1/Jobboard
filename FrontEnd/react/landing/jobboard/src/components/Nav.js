import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/pages/nav.css";

const Navigation = () => {
  return (
    <div className="Navig">
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="/">Job GPT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <div className="menu">
            <Nav className="me-auto">
                <NavLink className="Ac" to="/">Accueil</NavLink>
                <NavLink className="Ap" to="/Propos">À.propos</NavLink>
                <NavLink  className="Ai" to="/inscription">Connexion</NavLink>
                <NavLink  className="Aco" to="/connexion">Inscription</NavLink>
              </Nav>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
