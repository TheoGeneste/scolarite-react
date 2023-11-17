import axios from "axios";
import etudiant from "../Components/Etudiant";

function fetchFormateurs(){
    return axios.get("http://127.0.0.1:3000/formateur")
}
function fetchFormateurById(id){
    return axios.get("http://127.0.0.1:3000/formateur/"+id)
}

function addFormateur(formateur){
    return axios.post("http://127.0.0.1:3000/formateur", formateur, {headers : {
            "Content-Type" : "application/json"
    }})
}

export default {
    fetchFormateurs,
    fetchFormateurById,
    addFormateur
}