import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className='flex justify-between items-center py-4 px-4 bg-slate-100'>
      <h1 className='text-2xl font-bold'>Expense Tracker</h1>
      {isLoggedIn ? (
        <button onClick={logout}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> <Link to='/logout'>Logout</Link></button>
      ) : (
        <button onClick={login} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> <Link to='/'>Login</Link></button>
      )}
    </header>
  );
}

export default Header;