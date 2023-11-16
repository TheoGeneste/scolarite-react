import axios from "axios";

function fetchEtudiants(){
    return axios.get("http://127.0.0.1:3000/etudiant")
}
function fetchEtudiantById(id){
    return axios.get("http://127.0.0.1:3000/etudiant/"+id)
}

function addEtudiant(etudiant){
    return axios.post("http://127.0.0.1:3000/etudiant", etudiant, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default {
    fetchEtudiants,
    fetchEtudiantById,
    addEtudiant
}