import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';

import Routes from './routes/routes';
import store from './components/store';
import Header from './components/Header';

const App = () => {
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;
