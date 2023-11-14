import React, {useEffect, useState} from 'react';
import formateurService from "../Services/formateurService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const FormateurPage = () => {
    const [formateurs, setFormateurs] = useState([]);

    const fetchFormateurs = async () => {
        try {
            const response = await formateurService.fetchFormateurs();
            setFormateurs(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFormateurs()
    }, []);

    return <>
        {formateurs.map(formateur => {
            return <Card style={{ width: '18rem' }} key={formateur.fo_id}>
                <Card.Body>
                    <Card.Title>{formateur.fo_nom} {formateur.fo_prenom}</Card.Title>
                    <Card.Text>
                        {formateur.fo_id}
                    </Card.Text>
                    <Link to={"/formateur/"+formateur.fo_id}><Button variant="primary">Voir Utilisateurs</Button></Link>
                </Card.Body>
            </Card>
        })}
    </>;
};

export default FormateurPage;