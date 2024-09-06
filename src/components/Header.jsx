import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex justify-between items-center py-4 px-4 bg-slate-100'>
      <h1 className='text-2xl font-bold'>Expense Tracker</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> <Link to='/logout'>Logout</Link></button>
    </header>
  );
}

export default Header;