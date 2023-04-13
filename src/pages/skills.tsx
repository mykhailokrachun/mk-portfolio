import LanguagesColumn from '@/components/skillsComponents/LanguagesColumn';
import LibrariesColumn from '@/components/skillsComponents/LibrariesColumn';
import FrameworksColumn from '@/components/skillsComponents/FrameworksColumn';
import ToolsColumn from '@/components/skillsComponents/ToolsColumn';
import Head from 'next/head';

const skills = () => {
  return (
    <>
      <Head>
        <title>Skills | MK</title>
        <meta name='keywords' content='skills' />
      </Head>
      {/* <ParticlesComponent /> */}
      <section className='min-h-screen w-full flex flex-wrap flex-col items-center h-full'>
        <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Skills
        </h1>
        <div className='w-full flex flex-wrap flex-col p-8 pt-0 md:p-0 md:flex-row justify-evenly h-full'>
          {/* first column */}
          <LanguagesColumn />
          {/* second column */}
          <LibrariesColumn />
          {/* third column */}
          <FrameworksColumn />
          {/* fourth column */}
          <ToolsColumn />
        </div>
      </section>
    </>
  );
};
export default skills;
