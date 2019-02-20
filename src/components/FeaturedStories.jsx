import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
//import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const pic2 = require('../img/pic2.jpg');
const pic3 = require('../img/pic3.JPG');
const pic4 = require('../img/pic4.jpeg');
const pic5 = require('../img/pic5.jpg');

class FeaturedStories extends Component {
 

  render() {
    let pics = [pic2, pic3, pic4,pic5];

    return (
      <div>

        <div>
        <Container>
        <Row>
          <Col lg>
            <div className="d-flex justify-content-between">
              <h3>{this.props.leftData}</h3>
              <h6>{this.props.rightData}</h6>
            </div>
          </Col>
        </Row>
            <Row>
              {
                pics.map((pic) =>
                <Col lg><Image src={pic} width="100%" height="100%"/></Col>
                )
              }  
            </Row>
        </Container>
        </div>

      </div>
    )
  }
}

export default FeaturedStories;
