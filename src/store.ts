
import { create } from "zustand";

import { getCryptoPrice, getCryptos } from "./services/CryptoServices";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, Pair } from "./types";

type CriptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>,
};


export const useCryptoStore = create<CriptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],

    fetchCryptos: async () => {

        const cryptoCurrencies = await getCryptos();

        set(() => ({
            cryptoCurrencies
        }));
    },

    fetchData: async (pair) => {
        
        await getCryptoPrice(pair);

    }

})));