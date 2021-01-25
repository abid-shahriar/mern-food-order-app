import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

import CustomTypo from '../customComponents/CustomTypo';

const Nav = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const location = useLocation();
	// const history = useHistory();

	console.log(location);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

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
							<Icon name='angle down' size='large' link />
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
