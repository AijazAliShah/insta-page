import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class FeaturedStories extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>;
      </div>
    )
  }
}

export default FeaturedStories;
