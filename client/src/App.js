import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Nav from './components/navbar/Nav';
import Login from './pages/login';
import ProfilePage from './pages/profile';
import Home from './pages/home';

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/profile' component={ProfilePage} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
}

export default App;
