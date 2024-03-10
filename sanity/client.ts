// client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'o6i2drfn', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: 'v2022-03-07', // use a UTC date string
})