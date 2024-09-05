import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';


function Login() {
  return (
    <div className="h-1/2 w-full md:1/2 rounded-lg p-6 m-auto mt-24 flex flex-col items-center justify-center">
          <div className='w-full md:w-2/5  p-4 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-5xl text-gray-400 font-bold text-center'>Welcome Back</h1>
            <h2 className="font-bold text-center text-2xl md:text-3xl m-6">Login to your account</h2>
            <form type="submit" className="flex flex-col gap-8 items-center justify-center w-full md:w-2/3">
                <input type="email" placeholder="Email" className="px-4 py-2 text-white border-2 border-blue-100 rounded-lg w-full"/>
                <input type="password" placeholder="Password" className="px-4 py-2 text-white border-2 border-blue-100 rounded-lg w-full"/>
                <div className="flex gap-2 items-center justify-center">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-xl"><Link to='/home'>Sign In</Link></button>
                  <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-xl"><GoogleIcon /></button>
                </div>
                <p className='text-center text-sm'>Do not have an account? <Link to='/signup' className='text-blue-500 underline'>Sign Up</Link></p>
            </form>
          </div>
        </div>
  );
}

export default Login;