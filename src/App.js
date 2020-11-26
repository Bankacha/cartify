import { MainLayout } from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { Cart } from './components/pages/Cart';
import { Home } from './components/pages/Home';

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
      </Switch>

    </MainLayout>
  );
}

export default App;
