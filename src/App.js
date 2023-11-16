import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import EtablissementDetails from "./Pages/EtablissementDetails";
import EtudiantPage from "./Pages/EtudiantPage";
import EtudiantDetails from "./Pages/EtudiantDetails";
import UEPage from "./Pages/UEPage";
import UEDetails from "./Pages/UEDetails";
import FormateurPage from "./Pages/FormateurPage";
import FormateurDetails from "./Pages/FormateurDetails";
import SuivrePage from "./Pages/SuivrePage";
import SuivreEtudiantPage from "./Pages/SuivreEtudiantPage";
import SuivreUEPage from "./Pages/SuivreUEPage";
import ProposerPage from "./Pages/ProposerPage";
import ProposerUEPage from "./Pages/ProposerUEPage";
import ProposerEtablissementPage from "./Pages/ProposerEtablissementPage";
import CreateEtudiant from "./Pages/CreateEtudiant";
import { ToastContainer } from 'react-toastify';
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path={"/etablissement/:id"} element={<EtablissementDetails />}/>
        <Route path={"/etudiants"} element={<EtudiantPage />}/>
        <Route path={"/etudiant/create"} element={<CreateEtudiant />}/>
        <Route path={"/etudiant/:id"} element={<EtudiantDetails />}/>
        <Route path={"/ue"} element={<UEPage />}/>
        <Route path={"/ue/:id"} element={<UEDetails />}/>
        <Route path={"/formateurs"} element={<FormateurPage />}/>
        <Route path={"/formateur/:id"} element={<FormateurDetails />}/>
        <Route path={"/suivre"} element={<SuivrePage />}/>
        <Route path={"/suivre/etudiant/:id"} element={<SuivreEtudiantPage />}/>
        <Route path={"/suivre/ue/:id"} element={<SuivreUEPage />}/>
        <Route path={"/proposer"} element={<ProposerPage />}/>
        <Route path={"/proposer/ue/:id"} element={<ProposerUEPage />}/>
        <Route path={"/proposer/etablissement/:id"} element={<ProposerEtablissementPage />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
  </>;
}

export default App;
