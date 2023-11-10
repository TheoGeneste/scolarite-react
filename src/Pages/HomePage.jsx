import React, {useEffect, useState} from 'react';
import etablissementService from "../Services/etablissementService";
import Etablissement from "../Components/Etablissement";

const HomePage = () => {
    const [etablissements, setEtablissements] = useState([]);

    const fetchEtablissement = async () => {
        try {
            const response = await etablissementService.fetchEtablissement();
            setEtablissements(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEtablissement()
    }, []);


    return <>
        {etablissements.map(eta => {
            return <Etablissement key={eta.eta_id} etablissement={eta}/>
        })}
    </>;

};

export default HomePage;