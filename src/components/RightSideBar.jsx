import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap/';
import '../App.css';

//const profile_pic = require('../img/profile_pic.png');
const pic1 = require('../img/pic1.jpg');

class RightSideBar extends Component {
  render() {
    return (
      <div className="block-example border border-dark">
        <Image src={pic1}/>
            <br/>
            <p> 
                <h4><b>Banjaman Hardman</b></h4>
                <p><b>882</b> Photos &nbsp; <b>527k</b>Followers </p>
                <br/>
                <br/>
                <p>asjhdas djsda sksad ajshdjhasd ajsdhjhasd asdjhajshd ajshdjasdg sagdkhsagd mashdgksa ahsgdags</p>
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

export default RightSideBar;