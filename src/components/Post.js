import React, { useState, useEffect } from "react";

export default function Post({
	post,
	handleNewUser,
	handlesetImage,
	handlesetVideo,
	handlesetLikes,
	handlesetComment,
	handlesetCaptions,
	likesIncrease,
	handleDelete,
	handleUpdate,
}) {
	const [editFunction, setEditFunction] = useState(false);

	const cardToggle = (post) => {
		editFunction ? setEditFunction(false) : setEditFunction(true);
	};
	return (
		<div className='postImage' key={post._id}>
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

			<div
				id={`updateID${post._id}`}
				className={`updateForm ${editFunction ? "" : "hide"}`}
			>
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
			<div className='likeBox'>
				{" "}
				<p
					className='like fa fa-heart'
					onClick={() => {
						likesIncrease(post);
					}}
				></p>
				<p>{post.likes}</p>{" "}
			</div>
		</div>
	);
}
