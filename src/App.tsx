import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "components/Table";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Advance Typescript</p>
				<a
					className="App-link"
					href="https://github.com/wilkersoh/advance-typescript"
					target="_blank"
					rel="noopener noreferrer"
				>
					Typescript
				</a>
				<Table
					items={[
						{ id: 1, firstName: "Wilker" },
						{ id: 2, firstName: "Laoyeche" },
					]}
					renderItem={(item) => {
						return item.firstName;
					}}
				/>
			</header>
		</div>
	);
}

export default App;
