import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
//import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
    return (
        <>
            <Header />
            <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
    
                {/* <Route path='/inventory' component={InventoryPage} /> */}
                {/* <Route path='/inventory/:selectedInventory' component={InventoryPage} />
                <Route path='/inventory/:selectedInventory/edit' component={InventoryPage} />
                <Route path='/inventory/add' component={InventoryPage} />  */}
            </Switch> 
            </Router>
        </>

    )
}

export default App;