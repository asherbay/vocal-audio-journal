import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import Timeline from './pages/Timeline';
import Mood from './pages/Mood';
import Activities from './pages/Activities';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/aboutus" element = {<AboutUs/>} />
        <Route element = {<RequireAuth />}>
        <Route path = "/recordings" element = {<Timeline/>} />
        <Route path = "/activities" element = {<Activities/>} />
        <Route path = "/mood" element = {<Mood/>} />
        <Route path = "/protected" element = {<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
