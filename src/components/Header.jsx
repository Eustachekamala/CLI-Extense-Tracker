import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='flex justify-between items-center py-4 px-4 bg-slate-100'>
        <h1 className='text-2xl font-bold'>Expense Tracker</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> <Link to='/logout'>Logout</Link></button>
      </header>
      <div className='flex justify-center items-center px-4'>
        <div className='py-2 w-16 mx-auto border border-blue-100 rounded-lg'>
          <img src="https://media.istockphoto.com/id/1328821578/vector/invoicing-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=Y4SqEJlLnX5c88A-hcoxo46OlF70ic7UJYg-Yv9qK4E=" alt="Expense Tracker" className='w-28 mx-auto' />
        </div>
        <div>
          <p className='font-mono'>Welcom to Expense Tracker</p>
        </div>
      </div>
    </>  
  );
}

export default Header;