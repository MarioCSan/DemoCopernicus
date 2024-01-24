import { useEffect } from "react";


const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);



  return (
    <div className="loader" >
      <br/>
      <h1 style={{color: 'black'}}>Cargando datos...</h1>
    </div>
  );
};

export default Loader;