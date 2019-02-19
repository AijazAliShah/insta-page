import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap/';
import '../App.css';

const pic1 = require('../img/pic1.jpg');



class LeftSideBar extends Component {
  render() {
    return (
        <div className="leftSidebar" >  
            
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
    )
  }
}

export default LeftSideBar;