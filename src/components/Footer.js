const Footer = (props) => {
	return (
		<div class='nav nav-masthead justify-content-center float-md'>
			<footer class='mt-auto text-white-50'>
			<p>FINSTAGRAM</p>
				<a
							className='nav-link  float-md-end mt-auto text-white-50 '
							href='https://www.linkedin.com/in/sami-sipahi/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>SAMI SIPAHI</p>
						</a>

				<a
							className='nav-link  float-md-start mt-auto text-white-50 '
							href='https://www.linkedin.com/in/jesus-eduardo-prado/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>EDUARDO PRADO</p>
						</a>
						
				
			</footer>
		</div>
	);
};

export default Footer;
