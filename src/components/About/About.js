import React from 'react';
import "./index.css";
import dishant from './../../img/dishant.png'; 


class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
        <div id="about"className="about-wrapper"> 
            <div className="text-wrapper container">
                <div className="section-heading">ABOUT</div>
                <div className="about-main-image-wrapper">
                    <img className="am-image"src={dishant}></img>
                </div>
                <div className="about-item">Hi, I am Dishant, I work as a Junior Software Engineer at Bigtincan. I believe that hardwork abd commitment are the major factors in lifeHi, I am Dishant, I work as a Junior Software Engineer at Bigtincan. I believe that hardwork abd commitment are the major factors in life</div>
            </div>
            <div className="hr-line"></div>
         </div>
    );
  }
}

export default About;