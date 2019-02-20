import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag,faCompass, faCheckCircle,faUser, faBell, faPaperPlane,faChartPie, faCog  } from '@fortawesome/free-solid-svg-icons';

const pic1 = require('../img/pic1.jpg');


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
            
                 <a href="#home" color="white" className="a"><FontAwesomeIcon icon={faHome} /> Feed</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faCompass} /> Explore</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faHashtag} /> Trending tags</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faCheckCircle} /> Top Post</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faUser} /> People</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faBell} /> Notification</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faPaperPlane} /> Direct</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faChartPie} /> Stats</a>
                 <br/>
                 <a href="#home" className="a"><FontAwesomeIcon icon={faCog} /> Settings</a>
            </div>
      </div>
    )
  }
}

export default LeftSideBar;