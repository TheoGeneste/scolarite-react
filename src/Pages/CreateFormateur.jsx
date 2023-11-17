import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import etudiantService from "../Services/etudiantService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import formateurService from "../Services/formateurService";

const CreateFormateur = () => {
    const [formateur, setFormateur] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.currentTarget;
        setFormateur({...formateur, [name] : value})
    }

    const handleAdd = () => {
        try{
            const response = formateurService.addFormateur(formateur);
            toast.success("Le fromateur "+ formateur.nom + " à bien été crée");
            navigate("/formateurs")
        }catch (e){
            console.log(e)
        }
    }

    return <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="mail" value={formateur.mail} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" value={formateur.nom} name={"nom"} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" value={formateur.prenom} name={"prenom"} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Adresse Postal</Form.Label>
                <Form.Control type="text" placeholder="N° rue de la france" value={formateur.adresse} name={"adresse"} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Numéro Téléphone</Form.Label>
                <Form.Control type="text" placeholder="0633333333" value={formateur.numero} name={"numero"} onChange={handleChange} maxLength={10}/>
            </Form.Group>
            <Button variant="primary" onClick={handleAdd}>
                Envoyer
            </Button>
        </Form>
    </>;
};

export default CreateFormateur;