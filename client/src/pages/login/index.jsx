import { useState } from 'react';
import { Grid, Form, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const Login = () => {
	const [isSignup, setIsSignup] = useState(false);

	const handleMode = () => {
		setIsSignup((prevState) => !prevState);
	};

	return (
		<Grid padded width='16' centered style={{ minHeight: '100vh' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<StyledFromContainer padded>
					<StyledIcon name={isSignup ? 'user plus' : 'user'} circular bordered color='blue' inverted size='big' />
					<StyledLoginMode>{isSignup ? 'Sign Up' : 'Login'}</StyledLoginMode>
					<Form>
						{isSignup && (
							<>
								<CustomInputField name='firstName' type='text' placeholder='First Name' label='First Name' />
								<CustomInputField name='lastName' type='text' placeholder='Last Name' label='Last Name' />
							</>
						)}

						<CustomInputField name='email' type='text' placeholder='Your email' label='Email' />
						<CustomInputField name='password' type='password' placeholder='Password' label='Password' />
						{isSignup && (
							<CustomInputField
								name='cpassword'
								type='password'
								placeholder='Re-enter password'
								label='Confirm Password'
							/>
						)}

						<StyledButton color='blue'>{isSignup ? 'Sign Up' : 'Login'}</StyledButton>
						{!isSignup && (
							<StyledButton style={{ marginTop: '1rem' }} color='google plus'>
								Google Login
							</StyledButton>
						)}
					</Form>

					<StyledPara onClick={handleMode}>
						{isSignup ? 'Already have an account? Login' : 'Dont have an account? Sign up'}
					</StyledPara>
				</StyledFromContainer>
			</Grid.Row>
		</Grid>
	);
};

export default Login;

const StyledFromContainer = styled(Grid.Column)`
	min-width: 320px;
	max-width: 400px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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

const StyledLoginMode = styled.p`
	margin-top: 2rem;
	text-align: center;
	font-size: 1.5rem;
`;

const StyledButton = styled(Button)`
	width: 100%;
`;

const StyledPara = styled.p`
	cursor: pointer;
	color: #3f3fad;
	text-align: right;
	margin-top: 1rem;
`;
