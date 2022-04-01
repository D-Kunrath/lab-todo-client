import { Routes, Route } from 'react-router-dom'

import PrivateOutlet from './components/PrivateOutlet';

import Header from "./components/Header";
import Todos from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/private' element={<PrivateOutlet />} >
          <Route path='/private/todos' element={<Todos />} />
          <Route path='/private/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
