import { Grid } from 'semantic-ui-react';

import LoginRegisterFrom from './LoginRegisterFrom';

const Login = () => {
	return (
		<Grid padded width='16' centered style={{ minHeight: '100vh' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<LoginRegisterFrom />
			</Grid.Row>
		</Grid>
	);
};

export default Login;
