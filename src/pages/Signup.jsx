
import { Link } from 'react-router-dom';

function Signup() {
  return (
   <div className="h-1/2 w-full md:1/2 p-6 m-auto mt-40 flex flex-col items-center justify-center">
        <div className="w-full md:w-2/5 rounded-tr-3xl p-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center m-3">Sign Up</h1>
            <form type="submit" className="flex flex-col gap-8 items-center justify-center w-full md:w-2/3" >
                <input type="email" placeholder="Email" className='px-4 py-2 text-white border-2 border-blue-100 rounded-lg w-full' />
                <input type="password" placeholder="Password" className="px-4 py-2 text-white border-2 border-blue-100 rounded-lg w-full" />
                <button className="px-4 py-2 text-white bg-blue-500 rounded-xl">Sign Up</button>
                <p className="text-center text-sm">Already have an account? <Link to='/' className='text-blue-500 underline'>Sign In</Link></p>
            </form>
        </div>  
    </div>
  );
}

export default Signup;