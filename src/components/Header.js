import React from "react";
import New from "./New.js";

const Header = ({
	handleNewUser,
	handlesetImage,
	handlesetVideo,
	handlesetLikes,
	handlesetComment,
	handlesetCaptions,
	handleNew,
	cardToggleNew,
	toggleNew,
}) => {
	return (
		<div>
			<header className='mb-auto'>
				<div>
					<h2 className='nav nav-masthead justify-content-center float-md'>
						<div className='nav nav-masthead  float-md' class='card'>
							<div className='nav nav-masthead  float-md' class='text'>
								FINSTAGRAM
							</div>
						</div>
					</h2>
					<nav className='nav nav-masthead justify-content-center float-md'>
						<a
							className='nav-link fw-bold py-1 px-0 nav'
							aria-current='page'
							href='/'
						>
							Home
						</a>

						<p
							className='nav-link fw-bold py-1 px-0'
							onClick={() => {
								cardToggleNew();
							}}
						>
							New Post
						</p>

						{toggleNew ? (
							<New
								handleNew={handleNew}
								handleNewUser={handleNewUser}
								handlesetImage={handlesetImage}
								handlesetVideo={handlesetVideo}
								handlesetLikes={handlesetLikes}
								handlesetComment={handlesetComment}
								handlesetCaptions={handlesetCaptions}
							/>
						) : null}

						<a className='nav-link fw-bold py-1 px-0' href='/search.html'>
							Search
						</a>

						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/eduardopaaaa/P3'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Backend Git</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/samerunet/project_3_front'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Frontend Git</p>
						</a>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
