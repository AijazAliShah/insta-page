import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap/';
import '../App.css';

const pic1 = require('../img/pic1.jpg');
const explore = require('../img/explore.jpg');


class LeftSideBar extends Component {
  render() {
    return (
        <div >  
            
            <div  className="leftSidebar">
                <div>
                    <Image src={pic1} roundedCircle height="60px" width="60px"/>
                </div>              
                <br/>

                <div>
                    <h6><b>Aijaz Ali Shah</b></h6>
                    <p>Karachi, PAK</p>
                </div>
                    
                <br/>
                
                <div>
                    <Table className="table">
                        <tbody>
                            <tr>
                                <th>Post</th>
                                <th>Followers</th>
                                <th>Following</th>                         
                            </tr> 
                            <tr>
                                <td>100</td>
                                <td>21m</td>
                                <td>21m</td>
                            </tr>
                            
                        </tbody>
                    </Table>  
                </div>  
            </div>  

            <div className="leftSidebar1">
                 <a href="#">Feed</a>
                 <br/>
                 <a href="#">Explore</a>
                 <br/>
                 <a href="#">Trending tags</a>
                 <br/>
                 <a href="#">Top Post</a>
                 <br/>
                 <a href="#">People</a>
                 <br/>
                 <a href="#">Notification</a>
                 <br/>
                 <a href="#">Direct</a>
                 <br/>
                 <a href="#"> Stats</a>
                 <br/>
                 <a href="#">Settings</a>
            </div>
      </div>
    )
  }
}

export default LeftSideBar;