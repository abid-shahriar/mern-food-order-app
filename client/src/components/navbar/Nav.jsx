import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Dropdown, Icon, Label, Button } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

import { logout } from '../../store/actions/auth';

import CustomTypo from '../customComponents/CustomTypo';

const Nav = () => {
	const userData = useSelector((state) => state.user);
	const [user, setUser] = useState(userData);

	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('profile')) {
			setUser(JSON.parse(localStorage.getItem('profile')));
		} else {
			setUser('');
		}
	}, [location, userData]);

	const handleLogout = () => {
		dispatch(logout(history));
	};

	return (
		<>
			<StyledNav>
				<Link to='/'>
					<StyledDiv>
						<Icon name='food' size='big' />
						<StyledSpan>FoodBird</StyledSpan>
					</StyledDiv>
				</Link>
				<StyledDiv>
					{user ? (
						<>
							<Label circular color='violet' size='big'>
								{user.firstName.charAt(0)}
							</Label>
							<CustomTypo bold padded>
								{user.firstName}
							</CustomTypo>

							<Dropdown icon={<Icon name='angle down' size='large' />}>
								<Dropdown.Menu style={{ backgroundColor: 'lightgrey' }}>
									<Dropdown.Item>
										<Link to='/profile'>
											<Icon name='user' /> Profile
										</Link>
									</Dropdown.Item>
									<Dropdown.Item icon='settings' text='Settings' />
									<Dropdown.Item>
										<Button color='red' onClick={handleLogout}>
											Logout
										</Button>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</>
					) : location.pathname === '/login' ? null : (
						<Link to='/login'>
							<StyledBtn className='ui button blue'>Login</StyledBtn>
						</Link>
					)}
				</StyledDiv>
			</StyledNav>
			<StyledDiv shadow></StyledDiv>
		</>
	);
};

export default Nav;

const StyledSpan = styled.span`
	font-size: 1.5rem;
	font-weight: bolder;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.shadow &&
		css`
			display: block;
			width: 100%;
			height: 1px;
			background: grey;
			border-radius: 10px;
		`}
`;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
`;

const StyledBtn = styled.button`
	margin-left: 2rem;
`;
