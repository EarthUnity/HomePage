import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import { Home } from './pages/home';
import { MainHeader } from './assets/mainHeader';

function App() {
  return (
    <div className="App">

      <head>
        <link rel="icon" href="/images/logo/logo.png" />
      </head>

      <BrowserRouter>
        <MainHeader/>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
