import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './modules/MainPage/MainPage';
import HeaderContainer from './modules/Header/HeaderContainer';

function App() {

  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App;
