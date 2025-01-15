
import { useMemo } from "react";
import { useCryptoStore } from "../../store"
import Spinner from "../Spinner/Spinner";

const CriptoPriceDisplay = () => {

    const { result, loading } = useCryptoStore();

    const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo: <span>{result.LOWDAY}</span></p>
                            <p>Ultimas 24 hrs: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima Actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CriptoPriceDisplay