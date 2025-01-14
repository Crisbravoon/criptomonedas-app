
import { ChangeEvent, FormEvent, useState } from "react";

import { toast } from "react-toastify";

import { useCryptoStore } from "../../store";
import { currencies } from "../../data";
import { Pair } from "../../types";


const CriptoSearchForm = () => {

    const { cryptoCurrencies, fetchData } = useCryptoStore();

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptoCurrency: ''
    });




    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

        e.preventDefault();
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (Object.values(pair).includes('')) {
            toast.error('Todos los campos son obligatorios.');
            return
        }
        fetchData(pair);
    };

    return (

        <form
            className="form"
            onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    value={pair.currency}
                    onChange={handleChange}>

                    <option value="">-- Seleccione --</option>
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}

                </select>
            </div>

            <div className="field">
                <label htmlFor="criptoCurrency">Criptomoneda:</label>
                <select
                    name="criptoCurrency"
                    id="criptoCurrency"
                    onChange={handleChange}
                    value={pair.criptoCurrency}>

                    <option value="">-- Seleccione --</option>
                    {cryptoCurrencies.map((crypto) => (
                        <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                    ))}

                </select>
            </div>
            <input type="submit" value='Cotizar' />
        </form>

    )
}

export default CriptoSearchForm