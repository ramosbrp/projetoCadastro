import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Success } from './pages/Success'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Routes path='/register' component={ Register } />
                <Route path='/success' component={ Success } />
            </Switch>
        </BrowserRouter>
    )
}