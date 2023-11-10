import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import etablissementService from "../Services/etablissementService";

const EtablissementDetails = () => {
    const {id} = useParams();
    const [etablissement, setEtablissement] = useState({});

    const fetchEtablissementByID = async () => {
        try {
            const response = await etablissementService.fetchEtablissementById(id);
            setEtablissement(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtablissementByID()
    }, []);

    return <>
        {etablissement.eta_id}
        {etablissement.eta_nom}
        {etablissement.eta_ville}
    </>;
};

export default EtablissementDetails;