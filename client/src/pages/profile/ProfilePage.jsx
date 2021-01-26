import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';

const Profile = () => {
	const [editProfile, setEditProfile] = useState(false);
	const user = useSelector((state) => state.user);

	const changeMode = () => setEditProfile((prevState) => !prevState);

	return (
		<StyledProfileContainer>
			<div>
				<Label circular color='violet' size='big'>
					{user.firstName.charAt(0)}
				</Label>
			</div>

			{!editProfile ? (
				<div>
					<Segment>
						<span>First Name:</span>
						<span>{user.firstName}</span>
					</Segment>
					<Segment>
						<span>Last Name:</span>
						<span>{user.lastName}</span>
					</Segment>
					<Segment>
						<span>Email:</span>
						<span>{user.email}</span>
					</Segment>
					<div style={{ textAlign: 'right' }}>
						<Button color='blue' onClick={changeMode}>
							<Icon name='edit' />
							Edit Profile
						</Button>
					</div>
				</div>
			) : (
				<EditProfile changeMode={changeMode} />
			)}
		</StyledProfileContainer>
	);
};

export default Profile;

const StyledProfileContainer = styled(Grid.Column)`
	min-width: 320px;
	max-width: 400px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 1rem;
	position: relative;
	background-color: rgba(255, 255, 255, 0.5);
`;
