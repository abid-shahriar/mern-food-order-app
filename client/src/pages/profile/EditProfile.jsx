import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Message } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import { updateUser, clearMessages } from '../../store/actions/updateUser';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const EditProfileForm = ({ changeMode }) => {
	const user = useSelector((state) => state.user);
	const auth = useSelector((state) => state.auth);

	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [editProfileData, setEditProfileData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email
	});

	const dispatch = useDispatch();

	useEffect(() => {
		setErrorMessage(auth.error);
		setSuccessMessage(auth.success);
	}, [auth]);

	const handleChange = (e) => {
		setEditProfileData({
			...editProfileData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(updateUser(editProfileData));
	};

	const handleBack = (e) => {
		e.preventDefault();

		dispatch(clearMessages(true));

		changeMode();
	};

	console.log(auth);

	return (
		<Form onSubmit={handleSubmit}>
			<CustomInputField
				name='firstName'
				type='text'
				value={editProfileData.firstName}
				placeholder='First Name'
				label='First Name'
				handleChange={handleChange}
			/>
			<CustomInputField
				name='lastName'
				type='text'
				value={editProfileData.lastName}
				placeholder='Last Name'
				label='Last Name'
				handleChange={handleChange}
			/>
			<CustomInputField name='email' type='text' value={editProfileData.email} placeholder='Email' label='Email' handleChange={handleChange} />

			{errorMessage && <Message size='small' negative header={`Error..!!!`} content={errorMessage} />}
			{successMessage && <Message size='small' positive header={`Success..!!!`} content={successMessage} />}

			<div style={{ textAlign: 'right' }}>
				<Button color='black' onClick={handleBack}>
					Back
				</Button>
				<Button color='blue' type='submit'>
					Save
				</Button>
			</div>
		</Form>
	);
};

export default EditProfileForm;
