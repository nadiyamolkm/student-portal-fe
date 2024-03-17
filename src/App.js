
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Addstudent from './pages/Addstudent';
import Studentlist from './pages/Studentlist';
import Editstudent from './pages/Editstudent';
import Studentmarklist from './pages/Studentmarklist';

function App() {
  return (
    <div >

      <Header />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/studentlist' element={<Studentlist />} />
        <Route path='/studentlist/add' element={<Addstudent />} />
        <Route path='/studentlist/edit/:id' element={<Editstudent />} />
        <Route path='/studentmarklist' element={<Studentmarklist />} />
      </Routes>

    </div>
  );
}

export default App;
