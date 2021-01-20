import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

import CustomTypo from '../../components/customComponents/CustomType';

const Nav = () => {
	return (
		<>
			<StyledNav>
				<StyledDiv>
					<Icon name='food' size='big' />
					<StyledSpan>FoodBird</StyledSpan>
				</StyledDiv>
				<StyledDiv>
					<CustomTypo bold padded>
						Abid
					</CustomTypo>
					<Icon name='arrow down' />
					{/* <StyledBtn className='ui button blue' style={{ marginLeft: '2rem' }}>
						Login
					</StyledBtn> */}
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
