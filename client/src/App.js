import BookList from "./components/BookList";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
        Rayane's Reading List
        <BookList />
        <AddBook />
        </div>
    </ApolloProvider>

  );
}

export default App;
