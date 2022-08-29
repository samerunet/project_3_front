import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
	const [data, setData] = useState([]);

	// const handleNewFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	axios
	// 		.post("https://young-oasis-10029.herokuapp.com/create", {
	// 			username: String,
	// 			image: String,
	// 			video: String,
	// 			comment: String,
	// 			likes: Number,
	// 			caption: String,
	// 		})
	// 		.then(() => {
	// 			axios.get("http://localhost:3000/animal").then((response) => {
	// 				setAnimal(response.data);
	// 			});
	// 		});
	// };

	useEffect(() => {
		axios.get("https://young-oasis-10029.herokuapp.com/").then((response) => {
			setData(response.data);
		});
	}, []);

	// const handleDelete = (dogDelete) => {
	// 	axios.delete(`http://localhost:3000/animal/${dogDelete._id}`).then(() => {
	// 		axios.get("http://localhost:3000/animal").then((response) => {
	// 			setAnimal(response.data);
	// 		});
	// 	});
	// };

	// const handleUpdateDescription = (animalData) => {
	// 	axios
	// 		.put(`http://localhost:3000/animal/${animalData._id}`, {
	// 			name: updateName,
	// 			breed: updateBreed,
	// 			image: updateImage,
	// 			adopted: updateAdopted,
	// 		})
	// 		.then(() => {
	// 			axios.get("http://localhost:3000/animal").then((response) => {
	// 				setAnimal(response.data);
	// 			});
	// 		});
	// };
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
