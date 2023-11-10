import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EtablissementDetails from "./Pages/EtablissementDetails";
import EtudiantPage from "./Pages/EtudiantPage";
import EtudiantDetails from "./Pages/EtudiantDetails";
import UEPage from "./Pages/UEPage";
import UEDetails from "./Pages/UEDetails";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path={"/etablissement/:id"} element={<EtablissementDetails />}/>
        <Route path={"/etudiants"} element={<EtudiantPage />}/>
        <Route path={"/etudiant/:id"} element={<EtudiantDetails />}/>
        <Route path={"/ue"} element={<UEPage />}/>
        <Route path={"/ue/:id"} element={<UEDetails />}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
