import React from 'react'
import { Platform } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import Home from './Home'

const SERVER_URL = __DEV__
  ? Platform.select({
      ios: 'http://10.0.1.23:4000',
      android: 'http://10.0.2.2:4000',
    })
  : 'INSERT_PRODUCTION_URL'

const client = new ApolloClient({
  link: new HttpLink({ uri: SERVER_URL }),
  cache: new InMemoryCache(),
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    )
  }
}
