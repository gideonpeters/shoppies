// import logo from './logo.svg';
import './assets/styles/App.scss';
import Home from './pages/home.jsx';
import Error from './pages/error.jsx';
import { Switch, Route } from 'react-router-dom';
// import GlobalProvider from './store/GlobalProvider';

function App() {
  return (
    // <GlobalProvider>
    <main className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </main>
    // </GlobalProvider>
  );
}

export default App;
