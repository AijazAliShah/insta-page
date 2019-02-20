import React, { Component } from 'react';
import {Image, Table} from 'react-bootstrap';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag,faCompass, faCheckCircle,faUser, faBell, faPaperPlane,faChartPie, faCog  } from '@fortawesome/free-solid-svg-icons';

const pic1 = require('../img/pic1.jpg');


class LeftSideBar extends Component {

//     renderLinks = () => {
//         pics.map((pic) =>{
//             <div>
//                 <a href="#home" color="a" className="a"><FontAwesomeIcon icon={faHome} /> Feed</a>
//                 <br/>
//             </div>
//         }
//   );
//     }

    render() {

    const linkData = [
        {link: "#feed" , icon: faHome, text: "feed"},
        {link: "#Explore" , icon: faCompass, text: "Explore"},
        {link: "#trending_tag" , icon: faHashtag, text: "Trending Tag"},
        {link: "#top_post" , icon: faCheckCircle, text: "Top Post"},
        {link: "#people" , icon: faUser, text: "People"},
        {link: "#notification" , icon: faBell, text: "Notification"},
        {link: "#direct" , icon: faPaperPlane, text: "Direct"},
        {link: "#stats" , icon: faChartPie, text: "Stats"},
        {link: "#setting" , icon: faCog, text: "Setting"},        
    ];

    return (
        <div >  
            
            <div  className="leftSidebar">
                <div className="picCircle">
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
            
                {   
                    linkData.map((link) =>
                    <div>
                        <a href={link.link} className="a"><FontAwesomeIcon icon={link.icon} /> {link.text}</a>
                        <br/>
                        <br/>
                    </div>    
                    )
                } 
               
            </div>
      </div>
    )
  }
}

export default LeftSideBar;