import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>404 | MK</title>
        <meta name='keywords' content='error' />
      </Head>
      <div className='h-screen w-full flex flex-wrap flex-col items-center text-3xl text-altGray space-y-10 py-10 font-bold'>
        <h1>Oooops...</h1>
        <h2>That page cannot be found</h2>
        <p>Returning to Home...</p>
      </div>
    </>
  );
};
export default NotFound;
