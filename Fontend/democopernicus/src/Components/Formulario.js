import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const Formulario = ({ cliente }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [pais, setPais] = useState("");
  const [errorApi, setErrorApi] = useState(false);
  const url = "http://localhost:7001/api/clientes/";
  const handleSubmit = (e) => {
    e.preventDefault();

    const clienteData = {
      email: email !== "" && email !== undefined ? email : cliente.email,
      first: nombre !== "" && nombre !== undefined ? nombre : cliente.first,
      last: apellido !== "" && apellido !== undefined ? apellido : cliente.last,
      company:
        empresa !== "" && empresa !== undefined ? empresa : cliente.company,
      createdAt:
        fechaCreacion !== "" && fechaCreacion !== undefined
          ? fechaCreacion
          : cliente.createdAt,
      country: pais !== "" && pais !== undefined ? pais : cliente.country,
    };

    if (cliente.id === undefined) {
      console.log(JSON.stringify(clienteData));
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      }).then((response) => {
        if (response.ok) {
          toastExito("creado");
        } else {
          setErrorApi(true);
          toastError("crear");
        }
      });
    } else {
      console.log(JSON.stringify(clienteData));
      fetch(`${url}${cliente.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteData),
      }).then((response) => {
        if (response.ok) {
          toastExito("modificado");
        } else {
          toastError("modificar");
        }
      });
    }

    const toastError = (metodo) => {
      toast.error(`Hubo un problema al ${metodo} el cliente`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };

    const toastExito = (metodo) => {
      toast.success(`Usuario ${metodo} con exito`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };
    // Reiniciar el form
    setEmail("");
    setNombre("");
    setApellido("");
    setEmpresa("");
    setPais("");
  };

  return (
    <>
      {errorApi ? (
        <div className="centered-container">
          <h1>Hay un problema con la recuperación de los datos.</h1>
          <h2>No se puede acceder a la API.</h2>
          <h3>Comprueba que todo este bien conectado</h3>
        </div>
      ) : (
        <div className="centered-container">
          <h1>
            {cliente.id === undefined
              ? "Nuevo cliente"
              : `Modificar ${cliente.first} ${cliente.last}`}
          </h1>
          <div className="form-container">
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    placeholder={cliente.email ?? "Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="nombre">Nombre</label>
                  <br />
                  <input
                    id="nombre"
                    type="text"
                    placeholder={cliente.first ?? "Nombre"}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="apellido">Apellido</label>
                  <br />
                  <input
                    id="apellido"
                    type="text"
                    placeholder={cliente.last ?? "Apellido"}
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="alta">Empresa</label>
                  <br />
                  <input
                    id="empresa"
                    type="text"
                    placeholder={cliente.company ?? "Empresa"}
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="alta">Fecha creacion</label>
                  <br />
                  <input
                    id="alta"
                    type="datetime-local"
                    placeholder={cliente.createdAt ?? "2000/01/01T00:00"}
                    value={fechaCreacion}
                    onChange={(e) => setFechaCreacion(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="pais">País</label>
                  <br />
                  <input
                    id="pais"
                    placeholder={cliente.country ?? "País"}
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    required
                  />
                </div>

                <input
                  type="submit"
                  className="button"
                  style={{ backgroundColor: "green" }}
                />
              </form>
            </div>
            <div style={{ paddingTop: "20%" }}>
              <Link to="/" className="button btn-nuevo">
                Volver a inicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
