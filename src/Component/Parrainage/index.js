import React from 'react'
import '../../App.css';
import {Button, Col, Row} from "react-bootstrap";

class Parrainage extends React.Component {
    render(){
        const details = this.props.details;

         return   <li>
                <Row>
                    <Col sm>{details.date}</Col>
                    <Col sm>{details.nom}</Col>
                    <Col sm>{details.envoi}</Col>
                    <Col sm>{details.statut}</Col>
                    <Col sm> <Button variant="warning">Renvoyer</Button>{' '}</Col>
                </Row>
            </li>
    }
}

export default Parrainage
