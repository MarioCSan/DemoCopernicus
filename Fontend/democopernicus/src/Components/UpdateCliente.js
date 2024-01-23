import { useLocation, useParams } from "react-router-dom";
import { Formulario } from "./Formulario";
import { useEffect, useState } from "react";

function UpdateCliente() {
  const { idCliente } = useParams();
  const location = useLocation();

  const [cliente, setCliente] = useState({});
  const [errorApi, setErrorApi] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:7001/api/clientes/${idCliente}`);
    
      if (!response.ok) {
        setErrorApi(true);
        return;
      }

      const data = await response.json();
      setCliente(data);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    if (location.pathname === `/EditarCliente/${idCliente}` && Object.keys(cliente).length === 0) {
      fetchData();
    }
  }, [location.pathname, cliente, idCliente]);

  return (
    <>
      <Formulario cliente={cliente} />
    </>
  );
}

export default UpdateCliente;
