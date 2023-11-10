import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import etudiantService from "../Services/etudiantService";

const EtudiantDetails = () => {
    const {id} = useParams();
    const [etudiant, setEtudiant] = useState({});

    const fetchEtudiantById = async () => {
        try {
            const response = await etudiantService.fetchEtudiantById(id);
            setEtudiant(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtudiantById()
    }, []);

    return <>
        {etudiant.etu_id} <br />
        {etudiant.etu_nom}<br />
        {etudiant.etu_prenom}<br />
        {etudiant.etu_numero}<br />
        {etudiant.uri}
    </>;
};

export default EtudiantDetails;