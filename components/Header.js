import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


function Header() {
    const {data: session} = useSession();

  return ( 
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href='/'>
            <img className='object-contain w-20 cursor-pointer'
                 src='https://cdn-icons-png.flaticon.com/512/4697/4697260.png' 
                 alt=''
            />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5 font-semibold'>
            <h3 className='hover:shadow-lg rounded-full px-4 py-1 transition duration-200 ease-out cursor-pointer'>About</h3>
            <h3 className='hover:shadow-lg rounded-full px-4 py-1 transition duration-200 ease-out cursor-pointer'>Contact</h3>
            <button className='text-white bg-indigo-400 rounded-full px-4 py-1 cursor-pointer hover:shadow-lg hover:animate-pulse'>Follow</button>
        </div>
      </div>
      
      <div className='flex items-center space-x-5 text-indigo-800 cursor-pointer transition duration-200 ease-out'>
        <button className='hover:shadow-lg rounded-full px-4 py-1 font-semibold'
                onClick={session ? signOut : signIn}
        >{session ? 'Sign Out' : 'Sign In'}
        </button>
        {!session ? (
          <button className='hidden'>Get Started</button>
        ) : (
          <Link href={'/subscribe'}>
            <button className='border px-4 py-1 rounded-full border-indigo-400 hover:border-none hover:text-white hover:bg-indigo-400 transition duration-200 ease-out hover:shadow-lg font-semibold'>Get Started</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header