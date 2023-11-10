import axios from "axios";

function fetchEtudiants(){
    return axios.get("http://127.0.0.1:3000/etudiant")
}
function fetchEtudiantById(id){
    return axios.get("http://127.0.0.1:3000/etudiant/"+id)
}

export default {
    fetchEtudiants,
    fetchEtudiantById
}