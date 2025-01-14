
import { z } from 'zod'

export const SchemaCurrency = z.object({
    code: z.string(),
    name: z.string(),
});


export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string(),
    })
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)


export const SchemaPair = z.object({
    currency: z.string(),
    criptoCurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    HIGHDAY: z.string(),
    PRICE: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
});