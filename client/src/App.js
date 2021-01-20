import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Nav from './components/navbar/Nav';
import Login from './pages/login';

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Nav />
				<Switch>
					<Route exact path='/login' component={Login} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
}

export default App;
