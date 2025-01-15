
import { create } from "zustand";

import { getCryptoPrice, getCryptos } from "./services/CryptoServices";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";

type CriptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    loading: boolean,
    result: CryptoPrice,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>,
};


export const useCryptoStore = create<CriptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],
    result: {} as CryptoPrice,

    fetchCryptos: async () => {

        const cryptoCurrencies = await getCryptos();

        set(() => ({
            cryptoCurrencies
        }));
    },

    loading: false,

    fetchData: async (pair) => {

        const result = await getCryptoPrice(pair);
        set(() => ({
            loading: true
        }))

        set(() => ({
            result,
            loading: false
        }))
    }
})));