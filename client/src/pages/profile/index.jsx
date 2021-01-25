import { Grid } from 'semantic-ui-react';

import Profile from './ProfilePage';

const ProfilePage = () => {
	return (
		<Grid padded width='16' centered style={{ minHeight: 'calc(100vh - 72px)' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<Profile />
			</Grid.Row>
		</Grid>
	);
};

export default ProfilePage;
