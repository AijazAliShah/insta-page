import React, { Component } from 'react';
import {Image} from 'react-bootstrap/';
import '../App.css';

//const profile_pic = require('../img/profile_pic.png');
const pic1 = require('../img/pic1.jpg');


class RightSideBar extends Component {
  render() {
    return (
      <div>
        <Image src={pic1} width="100%" height="100%"/>
            <br/>
            <div display="flex" align-item="center"> 
                
                <div>
                    <h4><b>Banjaman Hardman</b></h4>
                    <span><b>882</b> Photos </span> &nbsp; <span> <b>527k</b> Followers </span>
                </div>
                <br/>
                <br/>
                <div>
                    <p>asjhdas djsda sksad ajshdjhasd ajsdhjhasd asdjhajshd ajshdjasdg sagdkhsagd mashdgksa ahsgdags</p>
                    <p>asjhdas djsda sksad ajshdjhasd ajsdhjhasd asdjhajshd ajshdjasdg sagdkhsagd mashdgksa ahsgdags</p>
                </div>
                
                
                 <div>
                     <div>
                         <p><b>locations</b></p>
                        <p>based in iceland</p>      
                    </div>
                    <div>
                        <p><b>profession</b></p>
                        <p>programmer</p>    
                    </div>
                    
                    <div>
                        <p><b>profession</b></p>
                        <p>photographer</p>
                    </div>
                 </div>    
            </div>      
      </div>
    )
  }
}

export default RightSideBar;