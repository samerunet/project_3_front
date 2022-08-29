import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
	const [data, setData] = useState([]);

	const handleNew = (event) => {
		event.preventDefault();
		axios
			.post("https://young-oasis-10029.herokuapp.com/create", {
				username: String,
				image: String,
				video: String,
				comment: String,
				likes: Number,
				caption: String,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						data(response.data);
					});
			});
	};

	useEffect(() => {
		axios.get("https://young-oasis-10029.herokuapp.com/").then((response) => {
			setData(response.data);
		});
	}, []);

	const handleDelete = (dataDelete) => {
		axios
			.delete(
				`https://young-oasis-10029.herokuapp.com/delete/${dataDelete._id}`
			)
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						data(response.data);
					});
			});
	};

	const handleUpdate = (Data) => {
		axios
			.put(`https://young-oasis-10029.herokuapp.com/update/${Data._id}`, {
				username: String,
				image: String,
				video: String,
				comment: String,
				likes: Number,
				caption: String,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						data(response.data);
					});
			});
	};
	return (
		<div className='App'>
			<h1>Are you actually running??</h1>
			<h4>created branch </h4>
			<ul>
				{data.map((post) => {
					return (
						<div>
							<li key={data._id}>{post.caption}</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
