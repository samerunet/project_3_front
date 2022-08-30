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

	// let like = 0;
	// $(document).ready(function () {
	// 	// ajax to get current likes
	// 	// let likes from server are 10
	// 	// assign the current likes to variable
	// 	like = 10;
	// 	setLikes(like);
	// });

	// $("body").on("click", ".likeBtn", function () {
	// 	// ajax to post a current likes
	// 	// in success add increment to likes
	// 	like++;
	// 	setLikes(like);
	// });

	// function setLikes(count) {
	// 	$(".totalLikes").text(count);
	// }

	return (
		<div className='App'>
			<h1>Are you actually running??</h1>
			<form class='form-control' onSubmit={handleNew}>
				username:
				<input
					className='form-control'
					placeholder='Username'
					type='text'
					onChange={handleNewUser}
				/>
				<br />
				image:
				<input
					className='form-control'
					placeholder='Insert Image'
					type='text'
					onChange={handlesetImage}
				/>
				<br />
				video:
				<input
					className='form-control'
					placeholder='Insert Video'
					type='text'
					onChange={handlesetVideo}
				/>
				<br />
				comment:
				<input
					className='form-control'
					placeholder='Comment'
					type='text'
					onChange={handlesetComment}
				/>
				<br />
				likes:
				<input
					className='form-control'
					type='number'
					onChange={handlesetLikes}
				/>
				<br />
				caption:
				<input
					className='form-control'
					type='text'
					onChange={handlesetCaptions}
				/>
				<br />
				<input type='submit' value='Add new post' />
			</form>
			<h4>created branch </h4>
			<ul>
				{data.map((post) => {
					return (
						<div>
							<li key={data._id}>{post.caption}</li>
							<button
								onClick={(event) => {
									handleDelete(data);
								}}
							>
								Delete
							</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
