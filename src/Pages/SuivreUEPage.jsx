import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import suivreService from "../Services/suivreService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const SuivreUePage = () => {
    const {id} = useParams();
    const [suivreUE, setSuivreUE] = useState([]);

    const fetchSuivreUE = async () => {
        try {
            const response = await suivreService.fetchSuivreUE(id)
            setSuivreUE(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchSuivreUE()
    }, []);


    return <>
        <h1>{suivreUE[0] != undefined && suivreUE[0].ue_label}</h1>
        {suivreUE.map((suiUE, index) => {
            return <Card style={{ width: '18rem' }} key={"suiUE"+index}>
                <Card.Body>
                    <Card.Title>{suiUE.etu_nom} {suiUE.etu_prenom}</Card.Title>
                    <Link to={'/etudiant/'+ suiUE.etu_id}><Button variant="primary">Voir Étudiant</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default SuivreUePage;