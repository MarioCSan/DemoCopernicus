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
      const response = await fetch(
        `http://localhost:7001/api/clientes/${idCliente}`
      );

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
    if (
      location.pathname === `/EditarCliente/${idCliente}` &&
      Object.keys(cliente).length === 0
    ) {
      fetchData();
    }
  }, [location.pathname, idCliente]);

  return (
    <>
      {errorApi ? (
        <div className="centered-container">
          <h1>Hay un problema con la recuperación de los datos.</h1>
          <h2>No se puede acceder a la API.</h2>
          <h3>Comprueba que todo este bien conectado</h3>
        </div>
      ) : (
        <div>
          <Formulario cliente={cliente} />
        </div>
      )}
    </>
  );
}

export default UpdateCliente;
