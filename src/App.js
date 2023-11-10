import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EtablissementDetails from "./Pages/EtablissementDetails";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path={"/etablissement/:id"} element={<EtablissementDetails />}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
