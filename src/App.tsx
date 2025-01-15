
import { useEffect } from "react";

import { Bounce } from "react-toastify/unstyled"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import CriptoPriceDisplay from "./components/Cripto/CriptoPriceDisplay";
import CriptoSearchForm from "./components/Cripto/CriptoSearchForm"
import { useCryptoStore } from "./store"


function App() {

  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    
    fetchCryptos();

  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span className="">Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
          <CriptoPriceDisplay/>
        </div>
        <ToastContainer
        position="top-center"
        transition={Bounce}
        theme="colored" />
      </div>
    </>
  )
}

export default App
