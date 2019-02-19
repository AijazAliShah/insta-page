import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav, Form, FormControl } from 'react-bootstrap';

import '../App.css';

const logo = require('../img/instagram.png');
const mic = require('../img/mic.png');
const profile_pic = require('../img/profile_pic.png');
const envolop = require('../img/envolop.png');
const heart = require('../img/heart.png');


class header extends Component {
  render() {
    return (
       
      <Navbar bg="light" expand="lg" className="header" margin="30px">
        
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
        
         <div className="start"> 
          <Nav className="mr-auto">
              <Form inline>
                          <FormControl type="text" placeholder="Search" className="mr-sm-2" border= "0" width="100%"
                            height="90%"  />
                          <img
                            src={mic}
                            width="4%"
                            height="35%"
                            className="d-inline-block align-top"
                            alt="mic"
                          />
                          
              </Form>
          </Nav>

         </div>


        <div className="middle">
            <button 
              type="button"
              className="btn btn-danger">
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
          <NavDropdown alignRight
            title="Dropdown right"
            inline className="dropDown"
                title={
    
                        <img className="thumbnail-image" 
                            src={profile_pic} 
                            alt="user pic"
                            width="30"
                            height="30"
                        />
                    
                } 
                id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

          </div>
       
</Navbar>
    

    )
  }
}

export default header;