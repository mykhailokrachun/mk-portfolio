import MainProjects from '@/components/projectsComponents/MainProjects';
import MiniProjects from '@/components/projectsComponents/MiniProjects';
import Head from 'next/head';

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | MK</title>
        <meta name='keywords' content='projects' />
      </Head>
      <div className='min-h-screen w-full'>
        <MainProjects />
        <MiniProjects />
      </div>
    </>
  );
};
export default projects;
