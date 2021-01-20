import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/navbar/Nav';
import Login from './pages/login';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path='/login' component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
