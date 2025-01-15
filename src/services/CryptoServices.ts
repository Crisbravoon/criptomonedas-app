
import axios from "axios";

import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import { Pair } from "../types";


export const getCryptos = async () => {

    try {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD'
        const { data: { Data } } = await axios.get(url);

        const resultData = CryptoCurrenciesResponseSchema.safeParse(Data);

        if (resultData.success) {

            return resultData.data;
        }

    } catch (error) {

        throw new Error('No se encontraron las criptomonedas');
    }
};

export const getCryptoPrice = async (pair: Pair) => {

    try {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency}`

        const { data: { DISPLAY } } = await axios.get(url);

        const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency]);
        
        if(result.success) {
            return result.data;
        }

    } catch (error) {

        throw new Error('No se encontrol el valor de las criptomonedas');
    }
};