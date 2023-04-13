import Certifications from '@/components/aboutComponents/Certifications';
import EducationColumn from '@/components/aboutComponents/EducationColumn';
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>About | MK</title>
        <meta name='keywords' content='about' />
      </Head>
      <section className='min-h-screen w-full grid md:grid-cols-2'>
        {/* column with certifications */}
        <Certifications />
        {/* column with education and about me */}
        <EducationColumn />
        {/* end of row with education and about me */}
      </section>
    </>
  );
};
export default about;
