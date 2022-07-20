import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
    return (
        <>
            <Router>
            <Header />
            <div className="app__bodywrap">
                <div className="app__card" >
                <HomePage />
                    {/* <AddWarehouse /> */}
                    {/* this is where the white panel is basically that has all the information for warehouse, inventory, etc. */}
                    {/* <Switch>
                        <Route path='/inventory' component={InventoryPage} />
                        <Route path='/inventory/:selectedInventory' component={InventoryPage} />
                        <Route path='/inventory/:selectedInventory/edit' component={InventoryPage} />
                        <Route path='/inventory/add' component={InventoryPage} />
                    </Switch> */}
                </div>
                <Footer />
            </div>

            </Router>
        </>
    )
}

export default App;