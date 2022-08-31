const Newform = (props) => {
	return (
		<div>
			<br />
			<br />
			<form className='form-control' onSubmit={props.handleNew}>
				username:
				<input
					className='form-control'
					placeholder='Username'
					type='text'
					onChange={props.handleNewUser}
				/>
				<br />
				image:
				<input
					className='form-control'
					placeholder='Insert Image'
					type='text'
					onChange={props.handlesetImage}
				/>
				<br />
				video:
				<input
					className='form-control'
					placeholder='Insert Video'
					type='text'
					onChange={props.handlesetVideo}
				/>
				<br />
				comment:
				<input
					className='form-control'
					placeholder='Comment'
					type='text'
					onChange={props.handlesetComment}
				/>
				<br />
				likes:
				<input
					className='form-control'
					type='number'
					onChange={props.handlesetLikes}
				/>
				<br />
				caption:
				<input
					className='form-control'
					type='text'
					onChange={props.handlesetCaptions}
				/>
				<br />
				<input type='submit' value='Add new post' />
			</form>
		</div>
	);
};
export default Newform;
