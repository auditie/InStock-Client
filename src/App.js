import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';

export const API_URL = 'http://localhost:8080/';

function App() {
    return (
        <Router>
            <Header />
            <div className="app__bodywrap">
                <div className="app__card" >
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/warehouses/add' component={HomePage} />
                        <Route path='/warehouses/:warehouseId' component={HomePage} />
                        <Route path='/inventory' component={InventoryPage} />
                        <Route path='/inventory/:inventoryId' component={InventoryPage} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
