import React from 'react';
import '../../App.css';
import {Container, Row, Col, Button} from "react-bootstrap";
import Buttons from "../Buttons";
import Parrainage from "../Parrainage";

class App extends React.Component{
    state={
        filleuls : [
            {date : "16 mai 2020", nom: "Prénom nom",envoi : "Par sms/email",statut:"En attente/Validée/Expirée"},
            {date : "5 mai 2020", nom: "",envoi : "",statut:""},
        ]
    }

    handleAdd = (filleul) =>{
        const filleuls=[...this.state.filleuls];
        filleuls.push(filleul);
        this.setState({filleuls});
    }
    render() {
        const elements = this.state.filleuls.map((filleul) =>
            <Parrainage details={filleul} />)
        return (
            <div className="App">
                <h1 className={'title'}>Vous aimez le BoatOn Book ? Recommandez-le !</h1>
                <Container className={'bloc'}>
                    <Row>
                        <Col>
                            <div>
                                <h2>3 mois Gratuits pour vous</h2>
                                <h3>à chaque filleul s'abonnant*</h3>
                            </div>
                        </Col>
                        <h1>|</h1>
                        <Col>
                            <div className>
                                <h2>3 mois Gratuits pour votre filleul</h2>
                                <h3>dès qu'il s'abonne</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Buttons onFilleulAdd={this.handleAdd}/>
                <div className={'liste'}>
                    <h1>Liste de mes parrainages</h1>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                            <ul>
                                {elements}
                            </ul>
                        </Col>
                    </Row>
                </div>
                <Row className="justify-content-md-center">
                    <Col xs lg={"2"}>
                        <h1>+ 80%</h1>
                    </Col>
                    <Col xs lg={"3"}>
                        <h2>
                            des utilisateurs recommandent BoatOn
                        </h2>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
