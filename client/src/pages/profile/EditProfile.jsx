import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import { editProfile } from '../../store/actions/editProfile';

import { CustomInputField } from '../../components/customComponents/CustomFormFields';

const EditProfileForm = ({ changeMode }) => {
	const [editProfileData, setEditProfileData] = useState({});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setEditProfileData({
			...editProfileData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// dispatch(editProfile(editProfileData));

		console.log(editProfileData);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<CustomInputField name='firstName' type='text' placeholder='First Name' label='First Name' handleChange={handleChange} />
			<CustomInputField name='lastName' type='text' placeholder='Last Name' label='Last Name' handleChange={handleChange} />
			<CustomInputField name='email' type='text' placeholder='Email' label='Email' handleChange={handleChange} />
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
