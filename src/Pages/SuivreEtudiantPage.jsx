import React, {useEffect, useState} from 'react';
import {useParams,Link} from "react-router-dom";
import suivreService from "../Services/suivreService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SuivreEtudiantPage = () => {
    const {id} = useParams();
    const [suivreEtudiant, setSuivreEtudiant] = useState([]);

    const fetchSuivreEtudiant= async () => {
        try {
            const response = await suivreService.fetchSuivreEtudiant(id);
            setSuivreEtudiant(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchSuivreEtudiant()
    }, []);


    return <>
        <h1>{suivreEtudiant[0] != undefined && suivreEtudiant[0].etu_nom}</h1>
        <h1>{suivreEtudiant[0] != undefined && suivreEtudiant[0].etu_prenom}</h1>
        {suivreEtudiant.map((suiEtu, index) => {
            return <Card style={{ width: '18rem' }} key={"suiEtu"+index}>
                <Card.Body>
                    <Card.Title>{suiEtu.ue_label}</Card.Title>
                    <Link to={'/ue/'+suiEtu.ue_id}><Button variant="primary">Voir L'ue</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default SuivreEtudiantPage;