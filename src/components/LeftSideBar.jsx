import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap/';
import '../App.css';

const profile_pic = require('../img/profile_pic.png');



class LeftSideBar extends Component {
  render() {
    return (
        <div className="leftSidebar" className="block-example border border-dark" >                
            <Image src={profile_pic} roundedCircle height="60px" width="60px"/>
            <br/>
            <p> 
                <h6><b>Aijaz Ali Shah</b></h6>
                        Karachi, PAK
                <br/>
                <br/>
                <p><b>       Followers          </b></p>
                
                <Table className="borderless">
                
                <tbody>
                    <tr>
                        <td><b>Post</b></td>
                        <td><b>Followers</b></td>
                        <td><b>Following</b></td>                         
                    </tr>
                    
                    <tr>
                        <td>100</td>
                        <td>21m</td>
                        <td>2m</td>
                    </tr>
                    
                </tbody>
                </Table>
            </p>          
      </div>
    )
  }
}

export default LeftSideBar;