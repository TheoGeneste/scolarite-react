import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ueService from "../Services/ueService";

const UeDetails = () => {
    const {id} = useParams();
    const [ue, setUe] = useState({});

    const fetchUEById = async () => {
        try {
            const response = await ueService.fetchUEById(id);
            setUe(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUEById()
    }, []);


    return <>
        {ue.ue_id}
        {ue.ue_label}
        {ue.uri}
    </>;
};

export default UeDetails;