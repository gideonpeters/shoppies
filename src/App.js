// import logo from './logo.svg';
import './assets/styles/App.scss';
import Home from './pages/home.jsx';
import Error from './pages/error.jsx';
import { Switch, Route } from 'react-router-dom';
import { MainProvider } from './context/main-context';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const [total, setTotal] = useState(null)
  const [nominations, setNominations] = useState(JSON.parse(localStorage.getItem('shoppies-nominations')) || [])

  let store = { search, setSearch, movies, setMovies, nominations, setNominations, total, setTotal, isLoading, setIsLoading, isBannerVisible, setIsBannerVisible };

  return (
    <MainProvider value={store}>
      <main className="App relative">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </main>
    </MainProvider>
  );
}

export default App;
