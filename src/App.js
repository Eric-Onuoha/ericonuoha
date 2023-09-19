import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/navigation/navigation.component';
import LandingPage from './pages/landingPage/landingPage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<LandingPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
