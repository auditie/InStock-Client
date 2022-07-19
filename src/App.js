import './App.scss';
import Header from './components/Header/Header';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
// import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
    return (
        <>
            {/* <Router> */}
            <Header />
            {/* <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/warehouses/:warehouseId' component={HomePage} />
                <Route path='/warehouses/:warehouseId/edit' component={HomePage} />
                <Route path='/warehouses/add' component={HomePage} />

                <Route path='/inventory' component={InventoryPage} />
                <Route path='/inventory/:itemId' component={InventoryPage} />
                <Route path='/inventory/:itemId/edit' component={InventoryPage} />
                <Route path='/inventory/add' component={InventoryPage} />
            </Switch> */}
            {/* </Router> */}
        </>

    )
}

export default App;
