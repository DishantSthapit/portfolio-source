import React from 'react';
import "./index.css";
import reactIcon from './../../img/react.png'; 
import cssIcon from './../../img/css.png'; 
import jsIcon from './../../img/js.png'; 

class TechnicalSkills extends React.Component {yarn 
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
        <div className="skill-overview-wrapper">
            <div className="section-heading">SKILLS OVERVIEW</div>
            <div className="about-image-wrapper">
                <div className="image-wrapper grow">
                    <img className="iw-image" src={reactIcon}></img>
                    <div className="image-text">React</div>
                </div>
                <div className="image-wrapper grow">
                    <img className="iw-image" src={jsIcon}></img>
                    <div className="image-text">Javascript</div>
                </div>
                <div className="image-wrapper grow">
                    <img className="iw-image" src={cssIcon}></img>
                    <div className="image-text">CSS</div>
                </div>
            </div>
            <div className="hr-line"></div>
        </div>
    );
  }
}

export default TechnicalSkills;