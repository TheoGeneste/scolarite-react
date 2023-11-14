import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import formateurService from "../Services/formateurService";

const FormateurDetails = () => {
    const {id} = useParams();
    const [formateur, setFormateur] = useState({});

    const fetchFormateurById = async () => {
        try {
            const response = await formateurService.fetchFormateurById(id)
            setFormateur(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFormateurById()
    }, []);

    return <>
        {formateur.fo_id} <br />
        {formateur.fo_nom}<br />
        {formateur.fo_prenom}<br />
        {formateur.uri}
    </>;
};

export default FormateurDetails;