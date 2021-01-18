import { useState } from 'react';
import { Grid, Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const intialFromData = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	cpassword: ''
};

const LoginRegisterFrom = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFromData] = useState(intialFromData);

	const handleMode = () => {
		setIsSignUp((prevState) => !prevState);
	};

	const handleChange = (e) => {
		setFromData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);
	};
	return (
		<StyledFromContainer>
			<StyledIcon name={isSignUp ? 'user plus' : 'user'} circular bordered color='blue' inverted size='big' />
			<StyledPara modeText>{isSignUp ? 'Sign Up' : 'Login'}</StyledPara>
			<Form onSubmit={handleSubmit}>
				{isSignUp && (
					<>
						<CustomInputField name='firstName' type='text' placeholder='First Name' label='First Name' handleChange={handleChange} />
						<CustomInputField name='lastName' type='text' placeholder='Last Name' label='Last Name' handleChange={handleChange} />
					</>
				)}

				<CustomInputField name='email' type='text' placeholder='Your email' label='Email' handleChange={handleChange} />
				<CustomInputField name='password' type='password' placeholder='Password' label='Password' handleChange={handleChange} />
				{isSignUp && (
					<CustomInputField name='cpassword' type='password' placeholder='Re-enter password' label='Confirm Password' handleChange={handleChange} />
				)}

				<StyledBtn className='ui button blue'>{isSignUp ? 'Sign Up' : 'Login'}</StyledBtn>

				{!isSignUp && (
					<StyledBtn className='ui button google plus' style={{ marginTop: '1rem' }} color='google plus'>
						Google Login
					</StyledBtn>
				)}
			</Form>

			<StyledPara onClick={handleMode}>{isSignUp ? 'Already have an account? Login' : 'Dont have an account? Sign up'}</StyledPara>
		</StyledFromContainer>
	);
};

export default LoginRegisterFrom;
const StyledFromContainer = styled(Grid.Column)`
	min-width: 320px;
	max-width: 400px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 1rem;
	position: relative;
`;

const StyledIcon = styled(Icon)`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const StyledPara = styled.p`
	cursor: ${(props) => (props.modeText ? 'none' : 'pointer')};
	color: ${(props) => (props.modeText ? 'black' : '#3f3fad')};
	font-size: ${(props) => (props.modeText ? '1.5rem' : '1rem')};
	text-align: ${(props) => (props.modeText ? 'center' : 'right')};
	margin-top: ${(props) => (props.modeText ? '2rem' : '1rem')};
`;

const StyledBtn = styled.button`
	width: 100%;
`;