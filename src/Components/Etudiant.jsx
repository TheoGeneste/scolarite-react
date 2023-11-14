import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const Etudiant = ({etudiant}) => {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={"http://127.0.0.1:3000/images/utilisateur/"+etudiant.etu_id} />
                <Card.Title>{etudiant.etu_nom + " " + etudiant.etu_prenom} {etudiant.etu_id}</Card.Title>
                <Card.Text>
                    {etudiant.etu_numero}
                </Card.Text>
                <Link to={"/etudiant/"+etudiant.etu_id}><Button variant="primary">Voir Étudiant</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default Etudiant;