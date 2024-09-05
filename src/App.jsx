import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './components/Dashbord'
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Dashbord />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;