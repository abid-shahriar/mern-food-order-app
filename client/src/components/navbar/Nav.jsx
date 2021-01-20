import React from 'react';
import { Grid, Segment, Icon, Header, Container } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const Nav = () => {
	return (
		<>
			<StyledNav>
				<StyledDiv className='logo'>
					<Icon name='food' size='big' />
					<StyledSpan>FoodBird</StyledSpan>
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
	/* box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); */
`;
