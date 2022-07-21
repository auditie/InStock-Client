import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
    return (
        <>
            <Router>
            <Header />
            <div className="app__bodywrap">
                <div className="app__card" >
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/inventory' component={InventoryPage} />
                    {/* <HomePage />
                    <InventoryPage /> */}
                    </Switch>
                </div>
                <Footer />
            </div>

            </Router>
        </>
    )
}

export default App;