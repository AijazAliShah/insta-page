import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Image
} from "react-bootstrap";

import "../App.css";
import leftSideBar from'./LeftSideBar';

const logo = require("../img/instagram.png");
const mic = require("../img/mic.png");
const envolop = require("../img/envolop.png");
const heart = require("../img/heart.png");

class header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="header" margin="1%">
        <div className="logo">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40%"
              height="90%"
              className="d-inline-block align-top"
              alt="intsa logo"
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <div class="dropdown-sidebar">
          <NavDropdown
            alignRight
            className="dropDown"
            id="basic-nav-dropdown"
          >
          <leftSideBar />
            
          </NavDropdown>
        </div>

        <div className="start">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                border="0"
                width="100%"
                height="90%"
              />
              <img
                src={mic}
                width="3%"
                height="50%"
                className="d-inline-block align-top"
                alt="mic"
              />
            </Form>
          </Nav>
        </div>

        <div className="middle">
          <button
            width="10%"
            height="6%"
            type="button"
            className="btn btn-danger"
          >
            + Create New Post
          </button>

          <img
            src={envolop}
            width="10%"
            height="8%"
            className="d-inline-block align-top"
            alt="intsa logo"
          />
          <img
            src={heart}
            width="10%"
            height="9%"
            className="d-inline-block align-top"
            alt="intsa logo"
          />
        </div>
        <div className="end">
          <NavDropdown
            alignRight
            className="dropDown"
            title={
              <Image
                roundedCircle
                className="thumbnail-image"
                src={this.props.profilePic}
                alt="user pic"
                width="30"
                height="30"
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    );
  }
}

export default header;
