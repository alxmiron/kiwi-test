import { FunctionComponent, ComponentType } from "react";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from "@apollo/client";

const link = createHttpLink({
	uri: "http://localhost:3000/api/graphql",
});

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export function withApollo<T>(Component: ComponentType<T>): FunctionComponent<T> {
	return (props) => {
		return (
			<ApolloProvider client={client}>
				<Component {...props} />
			</ApolloProvider>
		);
	};
}
