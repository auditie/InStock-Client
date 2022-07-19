import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
    return (
        <>
            {/* <Router> */}
            <Header />
            <div className="app__bodywrap">
                <div>

                    {/* <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/warehouses/:selectedWarehouse' component={HomePage} />
                        <Route path='/warehouses/:selectedWarehouse/edit' component={HomePage} />
                        <Route path='/warehouses/add' component={HomePage} />

                        <Route path='/inventory' component={InventoryPage} />
                        <Route path='/inventory/:selectedInventory' component={InventoryPage} />
                        <Route path='/inventory/:selectedInventory/edit' component={InventoryPage} />
                        <Route path='/inventory/add' component={InventoryPage} />
                    </Switch> */}

                </div>
                <Footer />
            </div>
            {/* </Router> */}
        </>

    )
}

export default App;