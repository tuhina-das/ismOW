import './App.css';
import Home from './Home';
import Balance from './Balance';
import Profile from './Profile';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoWrapper } from './TodoWrapper';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/todo" element={<TodoWrapper></TodoWrapper>} />
          <Route exact path="/balance" element={<Balance></Balance>} />
          <Route exact path="/profile" element={<Profile></Profile>} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
