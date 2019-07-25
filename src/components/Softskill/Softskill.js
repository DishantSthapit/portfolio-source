import React from 'react';
import "./index.css";
import hardwork from './../../img/hardwork.png'; 
import detail from './../../img/detail.png'; 
import timemanagement from './../../img/timemanagement.png'; 
import communication from './../../img/communication.png'; 
import { Accordion, Card, Button,  } from 'react-bootstrap';

class Softskill extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
	}

  render() {
    return(
        <div className="soft-skill-wrapper">
            <div className="container">
                <div className="about-heading">Soft Skills</div>
                <div className="card-wrapper">
                    <Card className="card-design">
                        <Card.Img variant="top" src={hardwork} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Hard Work
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>I am a hardworking person with great quality. Working hard always has been my importatnt trait</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={detail} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Attention to Detail
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>I am a hardworking person with great quality. Working hard always has been my importatnt trait</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={communication} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Communication
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>I am a hardworking person with great quality. Working hard always has been my importatnt trait</Card.Body>
                                    </Accordion.Collapse>
                                
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className="card-design">
                        <Card.Img variant="top" src={timemanagement} />
                        <Card.Body>
                            <Accordion defaultActiveKey="1" className="grow"> 
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                        Time Management
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>I am a hardworking person with great quality. Working hard always has been my importatnt trait</Card.Body>
                                    </Accordion.Collapse>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </div>
            </div>
         </div>
    );
  }
}

export default Softskill;