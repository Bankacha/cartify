import { MainLayout } from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { Cart } from './components/pages/Cart';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders'

function App() {

  return (
    <MainLayout>

      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>

    </MainLayout>
  );
}

export default App;
