import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, Grid, Icon, Label, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';

const Profile = () => {
	const [editProfile, setEditProfile] = useState(false);
	const user = useSelector((state) => state.user);

	const changeMode = () => setEditProfile((prevState) => !prevState);

	return (
		<StyledProfileContainer>
			<StyledDiv avatar>
				<Label circular color='violet' size='massive'>
					{user.firstName.charAt(0)}
				</Label>
			</StyledDiv>

			{!editProfile ? (
				<div>
					<Segment>
						<StyledSpan title>Name:</StyledSpan>
						<StyledSpan value>
							{user.firstName} {user.lastName}
						</StyledSpan>
					</Segment>

					<Segment>
						<StyledSpan title>Email:</StyledSpan>
						<StyledSpan value>{user.email}</StyledSpan>
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
	padding-top: 3rem;
`;

const StyledDiv = styled.div`
	${(props) =>
		props.avatar &&
		css`
			position: absolute;
			top: 0%;
			left: 50%;
			transform: translate(-50%, -50%);
		`}
`;

const StyledSpan = styled.span`
	${(props) =>
		props.title &&
		css`
			font-weight: bold;
			margin-right: 0.5rem;
		`}
`;
