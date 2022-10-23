import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[200],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage/>}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
