import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Etablissement = ({etablissement}) => {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{etablissement.eta_nom}</Card.Title>
                <Card.Text>{etablissement.eta_ville}
                </Card.Text>
                <Link to={"/etablissement/"+etablissement.eta_id}><Button variant="primary">Voir Etablissement</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default Etablissement;