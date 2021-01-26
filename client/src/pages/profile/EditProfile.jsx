import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Message } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import { updateUser } from '../../store/actions/updateUser';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const EditProfileForm = ({ changeMode }) => {
	const user = useSelector((state) => state.user);

	const [errorMessage, setErrorMessage] = useState('');
	const [editProfileData, setEditProfileData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email
	});

	const dispatch = useDispatch();

	useEffect(() => {
		setErrorMessage(user.error);
	}, [user]);

	const handleChange = (e) => {
		setEditProfileData({
			...editProfileData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(updateUser(editProfileData));

		if (!errorMessage) {
			changeMode();
		}
	};

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

			{errorMessage && <Message size='small' error header={`Error..!!!`} content={errorMessage} />}

			<div style={{ textAlign: 'right' }}>
				<Button color='black' onClick={changeMode}>
					Cancel
				</Button>
				<Button color='blue' type='submit'>
					{/* {auth.loading ? <Loader inverted size='tiny' inline active={auth.loading} /> : isSignUp ? 'Sign Up' : 'Login'} */}
					Save
				</Button>
			</div>
		</Form>
	);
};

export default EditProfileForm;
