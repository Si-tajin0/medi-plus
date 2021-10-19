import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home/Home";
import About from './components/Home/About/About';
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import Menubar from "./components/Shared/Menubar/Menubar";
import Login from './components/Shared/Login/Login';
import Appointment from './components/Shared/Appointment/Appointment';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
import Register from './components/Shared/Login/Register';
import Contact from './components/Home/Contact/Contact';
import Service from './components/Home/Service/Service';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/service/:serviceId'>
              <Service></Service>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
