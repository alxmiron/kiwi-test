import "../styles/globals.css";
import { withApollo } from "../client/withApollo";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default withApollo(MyApp);
