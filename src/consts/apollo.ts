// src/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import * as msal from '@azure/msal-browser'

const tentantId = process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID
const clientId = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID || 'testid'
const clientSecret = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET || 'testsecret'
const url = process.env.NEXT_PUBLIC_GRAPHQL_URL

const authority = `https://login.microsoftonline.com/${tentantId}`
const msalConfig = {
  auth: {
    clientId,
    clientSecret,
    authority,
    redirectUri: '/'
  }
}
const msalInstance = new msal.PublicClientApplication(msalConfig)

const getToken = async (): Promise<string | null> => {
  try {
    const authResponse = await msalInstance.acquireTokenSilent({
      scopes: [`${url}/.default`]
    })
    // const authResponse = await clientApp.acquireTokenByClientCredential({
    //   scopes: [`${url}/.default`]
    // })
    return authResponse?.accessToken || null
  } catch (error) {
    console.error('Failed to get token:', error)
    return null
  }
}

const httpLink = createHttpLink({
  uri: `${url}/graphql`
})

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
