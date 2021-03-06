import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import AddActivity from './Pages/AddActivity/AddActivity';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/addactivity' element={ <AddActivity/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/register' element={ <Register/> }></Route>
        <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
