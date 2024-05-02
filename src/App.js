import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './modules/MainPage/MainPage';
import HeaderContainer from './modules/Header/HeaderContainer';
import SidebarContainer from './modules/Sidebar/SidebarContainer';
import { useSelector } from 'react-redux';
import { selectOpenSidebarDrawer } from './store/main/selector';

function App() {

  const openSidebarvalue = useSelector( selectOpenSidebarDrawer )

  return (
    <div>
      <HeaderContainer />
      <SidebarContainer isDrawerOpen={ openSidebarvalue} />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App;
