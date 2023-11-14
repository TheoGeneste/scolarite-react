import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import proposerService from "../Services/proposerService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProposerUePage = () => {
    const {id} = useParams();
    const [proposerUE, setProposerUE] = useState([]);

    const fetchProposerUE = async () => {
        try {
            const response = await proposerService.fetchProposerUE(id)
            setProposerUE(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProposerUE()
    }, []);

    return <>
        <h1>{proposerUE[0] != undefined && proposerUE[0].ue_label}</h1>
        {proposerUE.map((pro, index) => {
            return <Card style={{ width: '18rem' }} key={'pro'+index}>
                <Card.Body>
                    <Card.Title>{pro.eta_nom}</Card.Title>
                    <Link to={"/etablissement/"+ pro.eta_id}><Button variant="primary">Voir etablissement</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default ProposerUePage;