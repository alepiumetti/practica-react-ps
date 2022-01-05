import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './layout/inicio/Inicio';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Inicio />
				</Route>
				<Route path='*'>
					<p>Esta ruta no existe</p>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
