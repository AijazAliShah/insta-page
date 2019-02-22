import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {FlexiImageGrid} from "react-flexi-image-grid";
import Lightbox from 'react-images';

class FeaturedStories extends Component {
  
  onClickHandler = (e) => {
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.src);

};

  render() {

    return (
      <div >

        {/* <div>
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
            this.props.pics.map((anObjectMapped, index)  => (
           
                <Col md={3} key={anObjectMapped.id} ><Image src={anObjectMapped.pic} width="100%" height="100%"/></Col>
                
          ))
          }  
        </Row>
        </Container>
        </div> */}
        
        {/* <Lightbox
          images={this.props.pics.map((pic)  => ({
            src: pic.pic

          }))}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        /> */}
        <div className="d-flex justify-content-between" style={{paddingLeft: "10px", paddingRight: "10px"}}>
              <h3>{this.props.leftData}</h3>
              <h6>{this.props.rightData}</h6>
            </div>
        <FlexiImageGrid images={this.props.pics.map((pic)  => ({
          src: pic.pic,
          className: "pic"+pic.id
        }))}
        numberOfColumns={3}
        onClick={this.onClickHandler}
        />

      </div>
    )
  }
}

export default FeaturedStories;
