import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';

export const API_URL = 'http://localhost:8080/';

function App() {
    return (
		<div className="app-container">
			<Router>
				<Header />
				<div className="app__bodywrap">
					<div className="app__card" >
						<Switch>
							<Route path='/' exact component={HomePage} />
							<Route path='/inventory' component={InventoryPage} />
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
    )
}

export default App;
