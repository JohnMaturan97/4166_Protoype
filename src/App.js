import {Route , BrowserRouter , Routes, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Reservation from './pages/Reservation'
// import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* <Navbar /> */}
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
