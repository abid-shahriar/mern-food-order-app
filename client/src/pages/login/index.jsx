import { useState } from 'react';
import { Grid, Form, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const Login = () => {
	const [isSignup, setIsSignup] = useState(false);

	return (
		<Grid padded width='16' centered style={{ minHeight: '100vh' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<StyledPageContainer width='4' padded>
					<StyledIcon name='key' circular bordered color='red' inverted size='big' />
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
				</StyledPageContainer>
			</Grid.Row>
		</Grid>
	);
};

export default Login;

const StyledPageContainer = styled(Grid.Column)`
	height: 600px;
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

const StyledP = styled.p``;
const StyledDiv = styled.div`
	font-size: 1.4rem;
`;
