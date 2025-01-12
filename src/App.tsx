
import { useEffect } from "react";

import CriptoSearchForm from "./components/Cripto/CriptoSearchForm"
import { useCryptoStore } from "./store"


function App() {


  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span className="">Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App
