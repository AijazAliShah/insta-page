import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
//import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";



class FeaturedStories extends Component {
 

  render() {

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
                this.props.pics.map((pic) =>
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
