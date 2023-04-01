import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { loginWithGoogle } from "./utils/firebase";

function App() {
	return (
		<div>
			<button
				onClick={async () => {
					const res = await loginWithGoogle();
					console.log(res);
				}}
			>
				GOogle sign in
			</button>
		</div>
	);
}

export default App;
