import ContactForm from '@/components/ContactForm';
import HomePage from '../components/Home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | MK</title>
        <meta name='keywords' content='main' />
      </Head>
      <HomePage />
      <ContactForm />
    </>
  );
}
