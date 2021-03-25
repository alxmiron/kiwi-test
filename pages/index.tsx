import Head from "next/head";
import { Form } from "../client/components/Form";
import { FullScreenLayout } from "../client/components/FullScreenLayout";

const Home = () => {
	return (
		<FullScreenLayout>
			<Head>
				<title>Kiwi.com Test Task</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Form />
		</FullScreenLayout>
	);
};

export default Home;
