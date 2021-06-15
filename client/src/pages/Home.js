import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	
	// const [account, setAccount] = useState("");
	// const [login, setLogin] = useState();

	//   function setAccount() {
	//   setAccount(0);
	//   }
	// function signIn() {
	// 	setLogin();
	// }

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">

			{/* <img
					className="logo"
					data-qa="logo"
					src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link> */}
		</main>
	);
}

export default Home;
