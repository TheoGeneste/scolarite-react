import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import etudiantService from "../Services/etudiantService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const CreateEtudiant = () => {
    const [etudiant, setEtudiant] = useState({
        mail : "",
        nom : "",
        prenom: "",
        adresse: "",
        numero: ""
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.currentTarget;
        setEtudiant({...etudiant, [name] : value})
    }

    const handleAdd = () => {
        try{
            const response = etudiantService.addEtudiant(etudiant);
            toast.success("L'etudiant "+ etudiant.nom + " à bien été crée");
            // navigate("/etudiants")
        }catch (e){
            console.log(e)
        }
        console.log(etudiant)
    }

    return <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="mail" value={etudiant.mail} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" value={etudiant.nom} name={"nom"} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" value={etudiant.prenom} name={"prenom"} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Adresse Postal</Form.Label>
                <Form.Control type="text" placeholder="N° rue de la france" value={etudiant.adresse} name={"adresse"} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numéro Téléphone</Form.Label>
                <Form.Control type="text" placeholder="0633333333" value={etudiant.numero} name={"numero"} onChange={handleChange} maxLength={10}/>
            </Form.Group>
            <Button variant="primary" onClick={handleAdd}>
                Envoyer
            </Button>
        </Form>
    </>;
};

export default CreateEtudiant;