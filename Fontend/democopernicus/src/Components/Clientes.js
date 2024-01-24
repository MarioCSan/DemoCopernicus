import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "./Loader";

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [errorApi, setErrorApi] = useState(false);
  const location = useLocation();
  const url ='http://localhost:7001/api/clientes/';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setErrorApi(true);
        return;
      }
      const data = await response.json();
      setClientes(data);
      setShowLoader(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  function eliminarCliente(idCliente) {
    fetch(url+ idCliente, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setErrorApi(true);
        }
      })
      .then(() => {
        setClientes(
          clientes.filter((cliente) => cliente.idCliente !== idCliente)
        );
       
        const index = clientes.findIndex((cliente) => cliente.id === idCliente);
        if (index !== -1) {
          clientes.splice(index, 1);
          setClientes(clientes.slice());
          alert("Usuario eliminado, se actualizara la lista de clientes");
        } 
      })
      .catch(() => setErrorApi(true));
  }

  useEffect(() => {
    if (location.pathname !== "/" && clientes.length !== 0) {
      setShowLoader(false);
    }

    if (clientes.length === 0) {
      setShowLoader(true);
    }

    if (location.pathname === "/" && clientes.length === 0) {
      fetchData();
    }
  }, [location.pathname, clientes]);

  return (
    <>
      {showLoader ? (
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <div>
          {errorApi ? (
            <div className="centered-container">
              <h1>Hay un problema con la recuperación de los datos.</h1>
              <h2>No se puede acceder a la API.</h2>
              <h3>Comprueba que todo este bien conectado</h3>
            </div>
          ) : (
            <div>
              <div style={{ padding: "2%" }}>
                <Link to="/NuevoCliente" className="button btn-nuevo">
                  Nuevo cliente
                </Link>
              </div>
              <div className="table-container">
                <table border={1}>
                  <thead>
                    <tr>
                      <td>IdCliente</td>
                      <td>email</td>
                      <td>Nombre</td>
                      <td>Apellido</td>
                      <td>Empresa</td>
                      <td>fecha creación</td>
                      <td>País</td>
                      <td>Acciones</td>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td key={item.id}>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.first}</td>
                          <td>{item.last}</td>
                          <td>{item.company}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.country}</td>
                          <td>
                            <Link
                              to={`/EditarCliente/${item.id}`}
                              className="button btn-warning"
                            >
                              Editar cliente
                            </Link>

                            <button
                              className="button btn-danger"
                              onClick={() => eliminarCliente(item.id)}
                            >
                              Eliminar Cliente
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
