import axios from "axios";

function fetchSuivres(){
    return axios.get("http://127.0.0.1:3000/suivre")
}

function fetchSuivreEtudiant(id){
    return axios.get("http://127.0.0.1:3000/suivre/"+id+"/etudiant")
}

function fetchSuivreUE(id){
    return axios.get("http://127.0.0.1:3000/suivre/"+id+"/ue")
}

export default {
    fetchSuivres,
    fetchSuivreEtudiant,
    fetchSuivreUE
}