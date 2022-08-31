import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Edit from "./components/edit.js";
import axios from "axios";

function App() {
	const [username, setUsername] = useState("");
	const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
	const [comment, setComment] = useState("");
	const [likes, setLikes] = useState(0);
	const [captions, setCaptions] = useState("");
	const [data, setData] = useState([]);
	const [toggleEdit, setToggleEdit] = useState(false);
	const [toggleNew, setToggleNew] = useState(false);

	const cardToggle = (post) => {
		document.getElementById(`updateID${post._id}`).classList.toggle("hide");
	};
	const cardToggleNew = () => {
		{
			toggleNew ? setToggleNew(false) : setToggleNew(true);
		}
	};
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
				username: username,
				image: image,
				video: video,
				comment: comment,
				likes: likes,
				caption: captions,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						setData(response.data);
					});
			});
	};

	useEffect(() => {
		axios.get("https://young-oasis-10029.herokuapp.com/").then((response) => {
			setData(response.data);
		});
	}, []);

	const handleUpdate = (item) => {
		axios
			.put(`https://young-oasis-10029.herokuapp.com/update/${item._id}`, {
				username: username ? username : item.username,
				image: image ? image : item.image,
				video: video ? video : item.video,
				comment: comment ? comment : item.comment,
				likes: likes ? likes : item.likes,
				caption: captions ? captions : item.caption,
			})
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						console.log(response);
						setData(response.data);
					});
			});
	};

	const handleDelete = (dataDelete) => {
		axios
			.delete(
				`https://young-oasis-10029.herokuapp.com/delete/${dataDelete._id}`
			)
			.then(() => {
				axios
					.get("https://young-oasis-10029.herokuapp.com/")
					.then((response) => {
						setData(response.data);
					});
			});
	};

	return (
		<div className='App'>
			<Header />
			<button
				onClick={() => {
					cardToggleNew();
				}}
			>
				{" "}
				Add new toggle
			</button>
			{toggleNew ? (
				<Edit
					handleNew={handleNew}
					handleNewUser={handleNewUser}
					handlesetImage={handlesetImage}
					handlesetVideo={handlesetVideo}
					handlesetLikes={handlesetLikes}
					handlesetComment={handlesetComment}
					handlesetCaptions={handlesetCaptions}
				/>
			) : null}
			<h4>created branch </h4>
			<ul>
				{data.map((post) => {
					return (
						<div className='postImage' key={post._id}>
							{/* <li>{post.username}</li>
							<li>{post.image}</li>
							<li>{post.video}</li>
							<li>{post.comment}</li>
							<li>{post.likes}</li>
							<li>{post.caption}</li> */}
							<img src={post.image} alt={post.username} />
							<button
								onClick={(event) => {
									handleDelete(post);
								}}
							>
								Delete
							</button>
							<button
								onClick={() => {
									cardToggle(post);
								}}
							>
								toggle edit
							</button>
							{/* {toggleEdit ? ( */}
							<div id={`updateID${post._id}`} className='updateForm hide'>
								<form
									className='form-control'
									onSubmit={(event) => {
										event.preventDefault();
										handleUpdate(post);
									}}
								>
									username:{""}
									<input
										className='form-control'
										placeholder={post.username}
										type='text'
										onChange={handleNewUser}
									/>
									<br />
									image:{""}
									<input
										className='form-control'
										placeholder={post.image}
										type='text'
										onChange={handlesetImage}
									/>
									<br />
									video:{""}
									<input
										className='form-control'
										placeholder={post.video}
										type='text'
										onChange={handlesetVideo}
									/>
									<br />
									comment:{""}
									<input
										className='form-control'
										placeholder={post.comment}
										type='text'
										onChange={handlesetComment}
									/>
									<br />
									likes:{""}
									<input
										className='form-control'
										type='number'
										placeholder={post.likes}
										onChange={handlesetLikes}
									/>
									<br />
									caption:{""}
									<input
										className='form-control'
										placeholder={post.caption}
										type='text'
										onChange={handlesetCaptions}
									/>
									<br />
									<input type='submit' value='edit button' />
								</form>
							</div>
							{/* ) : null} */}
						</div>
					);
				})}
			</ul>
			<Footer />
		</div>
	);
}

export default App;
