import React, {useEffect, useState} from 'react';
import proposerService from "../Services/proposerService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

const ProposerPage = () => {
    const [proposer, setProposer] = useState([]);

    const fetchProposer = async () => {
        try {
            const response = await proposerService.fetchProposer()
            setProposer(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProposer()
    }, []);

    return <>
        {proposer.map((pro, index) => {
            return <Card style={{ width: '18rem' }} key={"pro"+index}>
                <Card.Body>
                    <Card.Title>{pro.eta_nom} propose {pro.ue_label}</Card.Title>
                    <Link to={"/proposer/ue/"+pro.ue_id}><Button variant="primary" className={"m-4"}>Voir les etablissements de mon UE</Button></Link>
                    <Link to={"/proposer/etablissement/"+pro.eta_id}><Button variant="primary">Voir les ue de mon etablissement</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default ProposerPage;