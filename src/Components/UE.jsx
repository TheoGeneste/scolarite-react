import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const Ue = ({ue}) => {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{ue.ue_label}</Card.Title>
                <Link to={"/ue/"+ue.ue_id}><Button variant="primary">Voir UE</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default Ue;