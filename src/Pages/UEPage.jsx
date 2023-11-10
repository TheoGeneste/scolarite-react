import React, {useEffect, useState} from 'react';
import ueService from "../Services/ueService";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Ue from "../Components/UE";

const UePage = () => {
    const [ue, setUe] = useState([]);

    const fetchUE = async () => {
        try {
            const response = await ueService.fetchUE();
            setUe(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUE()
    }, []);

    return <>
        {ue.map(u => {
            return <Ue key={u.ue_id} ue={u}/>
        })}
    </>;
};

export default UePage;