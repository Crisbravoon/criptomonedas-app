
import { create } from "zustand";
import axios from "axios";

import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
import { CryptoCurrency } from "./types";

type CriptoStore = {

    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>,
};


const getCryptos = async () => {

    try {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD'
        const { data: { Data } } = await axios.get(url);

        const resultData = CryptoCurrenciesResponseSchema.safeParse(Data);

        return resultData.data;

    } catch (error) {
        throw new Error('No se encontraron las criptomonedas')
    }
};

export const useCryptoStore = create<CriptoStore>((set) => ({

    cryptoCurrencies: [],

    fetchCryptos: async () => {

        const cryptoCurrencies = await getCryptos();

        set(() => ({
            cryptoCurrencies
        }))
    }

}));