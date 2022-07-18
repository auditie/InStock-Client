import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App () {
    return (
        <Router>
            {/* Page Header will go here */}
            <Switch>
                <Route path='/' exact component={HomePage} />
                {/* Route path to warehouse details page  */}
                {/* Route path to inventory page */}
            </Switch>
        </Router>
    )
}

export default App;