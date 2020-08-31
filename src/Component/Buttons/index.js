import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import '../../App.css';


class Buttons extends React.Component {
         handleSubmit = event =>{
             event.preventDefault();
            const id= new Date().getDate().toString();
            const nom = "Simon NOEL";
            const envoi ="sms/email";
            const statut="En attente";
            this.props.onFilleulAdd({id,nom,envoi,statut});
        }
        render() {
            return (
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Button onClick={this.handleSubmit} className={'btn1'} variant="warning">J'envoie un
                            SMS</Button>
                        <Button onClick={this.handleSubmit} className={'btn1'} variant="warning">J'envoie un
                            email</Button>
                        <Button className={'btn1'} variant="warning">Je partage l'offre sur Facebook</Button>
                    </Col>
                </Row>
            )
        }
}

export default Buttons
