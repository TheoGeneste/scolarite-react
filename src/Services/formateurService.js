import axios from "axios";

function fetchFormateurs(){
    return axios.get("http://127.0.0.1:3000/formateur")
}
function fetchFormateurById(id){
    return axios.get("http://127.0.0.1:3000/formateur/"+id)
}

export default {
    fetchFormateurs,
    fetchFormateurById
}