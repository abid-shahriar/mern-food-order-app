import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import CustomInputField from '../../components/customComponents/CustomFormFields';

const EditProfile = () => {
	const [editProfileData, setEditProfileData] = useState({});

	const handleChange = (e) => {
		setEditProfileData({
			...editProfileData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<Form>
			<CustomInputField name='firstName' type='text' placeholder='First Name' label='First Name' handleChange={handleChange} />
			<CustomInputField name='lastName' type='text' placeholder='Last Name' label='Last Name' handleChange={handleChange} />
			<CustomInputField name='email' type='text' placeholder='Email' label='Email' handleChange={handleChange} />

			<Button color='blue'>
				{/* {auth.loading ? <Loader inverted size='tiny' inline active={auth.loading} /> : isSignUp ? 'Sign Up' : 'Login'} */}
				Save
			</Button>
		</Form>
	);
};

export default EditProfile;
