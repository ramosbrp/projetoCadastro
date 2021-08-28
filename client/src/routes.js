import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Success } from './pages/success';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/success' component={ Success } />
            </Switch>
        </BrowserRouter>
    )
}