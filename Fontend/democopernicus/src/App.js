import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import { Clientes } from "./Components/Clientes";
import CreateCliente from "./Components/UpdateCliente";
import UpdateCliente from "./Components/UpdateCliente";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Clientes />} />
        <Route path="/NuevoCliente" element={<CreateCliente />} />
        <Route path="/EditarCliente/:idCliente" element={<UpdateCliente />} />
      </Routes>
    </>
  );
}

export default App;
