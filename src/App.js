import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import Routes from './routes/routes';
import store from './components/store';
import Header from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const App = () => {
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container maxWidth="xl">
          <Router>
            <Header />
            <Routes />
          </Router>
        </Container>
      </Provider>
    </ThemeProvider>
  )
}

export default App;
