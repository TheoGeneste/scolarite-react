import axios from 'axios';

function fetchEtablissement(){
    return axios.get("http://127.0.0.1:3000/etablissement")
}

function fetchEtablissementById(etablissement_id){
    return axios.get("http://127.0.0.1:3000/etablissement/"+etablissement_id)
}

export default {
    fetchEtablissement,
    fetchEtablissementById
}