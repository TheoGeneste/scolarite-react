import React, {useEffect, useState} from 'react';
import suivreService from "../Services/suivreService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"

const SuivrePage = () => {
    const [suivres, setSuivres] = useState([]);

    const fetchSuivre = async () => {
        try {
            const response = await suivreService.fetchSuivres();
            setSuivres(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchSuivre()
    }, []);


    return <>
        {suivres.map((sui, index) => {
            return <Card style={{ width: '18rem' }} key={"suivre_"+index}>
                <Card.Body>
                    <Card.Title>{sui.etu_nom} {sui.etu_prenom} suit {sui.ue_label}</Card.Title>
                    <Link to={"/suivre/etudiant/"+sui.etu_id}><Button variant="primary" className={"m-4"}>Voir Cours suivi de l'etudiant</Button></Link>
                    <Link to={"/suivre/ue/"+sui.ue_id}><Button variant="primary">Voir tous les etudiants qui suivent ce cours</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default SuivrePage;