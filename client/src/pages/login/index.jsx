import { Grid, Form, Input } from 'semantic-ui-react';

const Login = () => {
	return (
		<Grid padded width='16' centered>
			<Form>
				<Grid padded>
					<Input label='name' />
				</Grid>

				<Grid padded>
					<Input label='password' />
				</Grid>
			</Form>
		</Grid>
	);
};

export default Login;
