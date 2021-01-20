import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

const Nav = () => {
	return (
		<nav>
			<Segment>
				<div className='logo'>
					<Icon name='food' />
					FoodBird
				</div>
			</Segment>
		</nav>
	);
};

export default Nav;
