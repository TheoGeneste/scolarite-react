import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import proposerService from "../Services/proposerService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProposerEtablissementPage = () => {
    const {id} = useParams();
    const [proposerEtablissement, setProposerEtablissement] = useState([]);

    const fetchProposerEtablissement = async () => {
        try {
            const response = await proposerService.fetchProposerEtablissement(id)
            setProposerEtablissement(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProposerEtablissement()
    }, []);

    return <>
        <h1>{proposerEtablissement[0] != undefined && proposerEtablissement[0].eta_nom}</h1>
        {proposerEtablissement.map((prop, index) => {
            return <Card style={{ width: '18rem' }} key={"propEta"+index}>
                <Card.Body>
                    <Card.Title>{prop.ue_label}</Card.Title>
                    <Link to={"/ue/"+prop.ue_id}><Button variant="primary">Voir UE</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default ProposerEtablissementPage;