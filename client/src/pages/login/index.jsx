import { Grid } from 'semantic-ui-react';

import LoginRegisterFrom from './LoginRegisterFrom';

const Login = () => {
	return (
		<Grid padded width='16' centered style={{ minHeight: 'calc(100vh - 72px)' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<LoginRegisterFrom />
			</Grid.Row>
		</Grid>
	);
};

export default Login;
