import Home from './Home'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });
  return (
    <ApolloProvider client={client}>
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 ... h-screen">
      <Home/>
    </div>
    </ApolloProvider>
  );
}

export default App;
