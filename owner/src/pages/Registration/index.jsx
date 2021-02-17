import React from 'react';
import { Grid } from 'semantic-ui-react';

import RegistrationForm from './RegistrationForm';

const RegistrationFormPage = () => {
	return (
		<Grid padded width='16' centered style={{ minHeight: 'calc(100vh - 72px)' }}>
			<Grid.Row style={{ alignItems: 'center' }}>
				<RegistrationForm />
			</Grid.Row>
		</Grid>
	);
};

export default RegistrationFormPage;
