import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clm3mlmap2c9s01ugdbd5dt1q/master',
    cache: new InMemoryCache()
})