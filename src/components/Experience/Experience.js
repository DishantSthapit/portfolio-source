import React from 'react';
import "./index.css";


class TechnicalSkills extends React.Component {yarn 
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }
    }


  render() {
    return(
        <div>
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div class="content">
                <h2>Heading</h2>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
            </div>
        </div>

    );
  }
}

export default TechnicalSkills;
