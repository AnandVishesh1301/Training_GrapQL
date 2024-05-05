import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client'
//const root = createRoot(document.getElementById('root'));

const client= new ApolloClient({
  uri:"http://localhost:4000",
  cache: new InMemoryCache(),
  // To store the results of our grapgQl queries

})
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  
  </ApolloProvider>,
  document.getElementById('root')


);

{/* root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>
); */}
