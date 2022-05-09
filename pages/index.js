import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Body content */}
      <div className='flex justify-between items-center bg-indigo-400 border-y border-black py-10 lg:py-0'>
        <div className="px-10 space-y-5">
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='overline decoration-black decoration-4'>TO-DO</span> is a place to plan, do, accomplish
          </h1>
          <h2 className='italic'>
            It's easy to create a custome to-do list to cater your needs. Connect with millions of others already DOING. 
          </h2>
        </div>

        <img className='hidden md:inline-flex h-32 lg:h-full' 
             src="https://images.unsplash.com/photo-1642543492457-39a2ce63bb59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
             alt="" 
        />  
      </div>
    </div>
  )
}


// npm install --save next-auth
// npm install firebase
