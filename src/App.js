import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
	const [username, setUsername] = useState("");
	const [Image, setImage] = useState("");
	const [video, setVideo] = useState("");
	const [comment, setComment] = useState("");
	const [likes, setLikes] = useState(0);
	const [captions, setCaptions] = useState("");
	const [data, setData] = useState([]);

	const handleNewUser = (event) => {
		setUsername(event.target.value);
	};

	const handlesetImage = (event) => {
		setImage(event.target.value);
	};

	const handlesetVideo = (event) => {
		setVideo(event.target.value);
	};

	const handlesetComment = (event) => {
		setComment(event.target.value);
	};

	const handlesetLikes = (event) => {
		setLikes(event.target.value);
	};

	const handlesetCaptions = (event) => {
		setCaptions(event.target.value);
	};

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
			<form class='form-control' onSubmit={handleNew}>
				Caption:<input class='form-control' type='text' onChange={handlesetCaptions}></input>
				Comment: <input class='form-control' placeholder='Comment' type='text' onChange={handlesetComment}/><br/>
				Video: <input class='form-control' placeholder='Insert Video' type='text' onChange={handlesetVideo}/><br/>
				User: <input class='form-control' placeholder='Username' type='text' onChange={handleNewUser}/><br/>
         		Likes: <input class='form-control' type="text" onChange={handlesetLikes}/><br/>
          		Image: <input class='form-control' placeholder='Insert Image' type="text" onChange={handlesetImage}/><br/>
			</form>
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
