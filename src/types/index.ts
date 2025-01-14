
import { z } from 'zod'

import { SchemaCurrency , CryptoCurrencyResponseSchema, SchemaPair} from '../schema/crypto-schema'

export type Currency = z.infer<typeof SchemaCurrency>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer <typeof SchemaPair>

