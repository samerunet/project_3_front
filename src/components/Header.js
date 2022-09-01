import React from "react";

const Header = (props) => {
	return (
		<div>
			<header className='mb-auto'>
				<div>
					<h2 className='nav nav-masthead justify-content-center float-md'>
					FINSTAGRAM
					</h2>
					<nav className='nav nav-masthead justify-content-center float-md'>
						<a
							className='nav-link fw-bold py-1 px-0 nav'
							aria-current='page'
							href='/'
						>
							Home
						</a>

						<a className='nav-link fw-bold py-1 px-0' href='/'  >
							New Post
						</a>

						<a className='nav-link fw-bold py-1 px-0' href='/search.html'>
							Search
						</a>

						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/eduardopaaaa/P3'
							target='_blank'
							type='button'
						>
							{" "}
							<p>Backend Git</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/samerunet/project_3_front'
							target='_blank'
							type='button'
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
