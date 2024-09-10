import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './Header';
import { gsap } from 'gsap';

function Dashbord() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    e.preventDefault();
    const expense = {
      id: Math.random().toString(36).substring(7),
      date: new Date().toLocaleDateString(),
      amount: parseFloat(e.target.elements.amount.value),
      description: e.target.elements.description.value,
    };
    setExpenses([...expenses, expense]);
    e.target.elements.amount.value = '';
    e.target.elements.description.value = '';
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='flex flex-col gap-4 text-center'>
        <Header />
      <form onSubmit={addExpense} className='flex flex-col gap-4 text-center items-center mt-2'>
        <label htmlFor="date">Date</label>
        <input className='border-2 border-slate-200 rounded-md' type="date" name="date" id="date" />
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <input className='border-2 border-slate-200 rounded-md' type="number" name="amount" id="amount" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input className='border-2 border-slate-200 rounded-md' type="text" name="description" id="description" />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 w-max text-white font-bold py-2 px-4 rounded'><AddIcon /></button>
      </form>
      <table className='table-auto border-collapse w-full'>
        <thead className='border-b border-slate-200 w-full'>
          <tr className='bg-slate-100 text-slate-800 justify-around w-full'>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th className='text-red-400'>Action</th>
          </tr>
        </thead>
        <tbody className='text-center w-full'>
          {expenses.map((expense) => (
            <tr key={expense.id} className='border-b border-slate-200 mx-4 w-full'>
              <td>{expense.date}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.description}</td>
              <td className='text-right'>
                <button onClick={() => deleteExpense(expense.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'><DeleteIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashbord;