import Head from "next/head";
import { FormEventHandler, useState } from "react";
import { Alert, InputField } from "@kiwicom/orbit-components";

import styles from "../styles/Home.module.css";
import { ConvertResponse } from "../interface/convert";
import { request } from "../utils/request";

export default function Home() {
	const [inputValue, setInputValue] = useState("");
	const [result, setResult] = useState("");

	const handleSubmit: FormEventHandler = async (event) => {
		event.preventDefault();
		const number = inputValue.trim();
		const response = await request<ConvertResponse>(`/api/convert/${number}`);
		setResult(`Results for ${number}: ${response.result.join(", ")}`);
		setInputValue("");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>

			<form onSubmit={handleSubmit}>
				<InputField
					inputMode="numeric"
					type="number"
					value={inputValue}
					onChange={(event) => setInputValue(event.currentTarget.value)}
				/>
			</form>
			{result && <Alert>{result}</Alert>}

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
