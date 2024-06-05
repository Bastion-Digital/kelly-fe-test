import Container from '../UI/Container';

const SignupForm = () => {
	return (
		<Container>
			<h2 className='form__title'>Form title</h2>
			<form
				action=''
				className='form'
			>
				<input
					type='text'
					placeholder='First name'
					name='first-name'
					className='form__input'
				/>
				<input
					type='text'
					placeholder='Last name'
					name='last-name'
					className='form__input'
				/>
				<input
					type='email'
					placeholder='Email address'
					name='email'
					className='form__input'
				/>
				<input
					type='text'
					placeholder='City'
					name='city'
					className='form__input'
				/>
				<div className='form__button'>
					<button
						type='submit'
						className='button button--standard button--primary'
					>
						Submit
					</button>
				</div>
			</form>
		</Container>
	);
};

export default SignupForm;
