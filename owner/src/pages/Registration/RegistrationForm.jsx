import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Grid, Loader, Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import { createNewShop } from '../../store/registration/actions';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const intialFromData = {
	shopName: '',
	email: '',
	password: '',
	cpassword: ''
};

const RegistrationForm = () => {
	const [showPass, setShowPass] = useState(false);
	const [matchPass, setMatchPass] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const [formData, setFromData] = useState(intialFromData);

	const shop = useSelector((state) => state.shop);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		formData.password === formData.cpassword ? setMatchPass(true) : setMatchPass(false);
	}, [formData.cpassword, formData.password]);

	useEffect(() => {
		setErrorMessage(shop.error);
	}, [shop]);

	const handleShowPass = () => setShowPass((prevState) => !prevState);
	const handleChange = (e) => {
		setFromData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.cpassword) {
			return setErrorMessage('Passowrds does not match');
		}

		dispatch(createNewShop(formData, history));
		console.log(formData);
	};

	// console.log(shop);
	return (
		<StyledFromContainer>
			<Form onSubmit={handleSubmit} error={errorMessage ? true : false}>
				<CustomInputField name='shopName' type='text' placeholder='Shop Name' label='Shop Name' handleChange={handleChange} />
				<CustomInputField name='email' type='text' placeholder='Your email' label='Email' handleChange={handleChange} />
				<CustomInputField
					name='password'
					type={showPass ? 'text' : 'password'}
					placeholder='Password'
					label='Password'
					handleChange={handleChange}
					handleShowPass={handleShowPass}
				/>

				<CustomInputField
					name='cpassword'
					type='password'
					placeholder='Re-enter password'
					label='Confirm Password'
					handleChange={handleChange}
					matchPass={matchPass}
				/>

				{errorMessage && <Message size='small' error header={`Error..!!!`} content={errorMessage} />}

				<Button color='blue' type='submit'>
					{shop.isLoading ? <Loader inverted size='tiny' inline active={shop.isLoading} /> : 'Register'}
				</Button>
			</Form>
		</StyledFromContainer>
	);
};

export default RegistrationForm;

const StyledFromContainer = styled(Grid.Column)`
	min-width: 320px;
	max-width: 400px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 1rem;
	position: relative;
	background-color: rgba(255, 255, 255, 0.5);
`;
