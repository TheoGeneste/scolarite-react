import React, {useEffect, useState} from 'react';
import etudiantService from "../Services/etudiantService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Etudiant from "../Components/Etudiant";


const EtudiantPage = () => {
    const [etudiants, setEtudiants] = useState([]);

    const fetchEtudiants = async () => {
        try {
            const response = await etudiantService.fetchEtudiants();
            setEtudiants(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtudiants()
    }, []);


    return <>
        {etudiants.map(etu => {
            return <Etudiant key={etu.etu_id} etudiant={etu}/>
        })}
    </>;
};

export default EtudiantPage;