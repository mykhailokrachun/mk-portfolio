import LanguagesColumn from '@/components/skillsComponents/LanguagesColumn';
import ToolsColumn from '@/components/skillsComponents/ToolsColumn';
import FrontEndLanguagesColumn from '@/components/skillsComponents/FrontEndLanguagesColumn';
import FrontEndLibrariesColumn from '@/components/skillsComponents/FrontEndLibrariesColumn';
import FrontEndFrameworksColumn from '@/components/skillsComponents/FrontEndFrameworksColumn';
import FrontEndToolsColumn from '@/components/skillsComponents/FrontEndToolsColumn';
import BackEndEnvironmentsColumn from '@/components/skillsComponents/BackEndEnvironmentsColumn';
import BackEndServicesColumn from '@/components/skillsComponents/BackEndServicesColumn';
import BackEndFrameworksColumn from '@/components/skillsComponents/BackEndFrameworksColumn';
import BackEndDatabasesColumn from '@/components/skillsComponents/BackEndDatabasesColumn';
import BackEndToolsColumn from '@/components/skillsComponents/BackEndToolsColumn';
import Head from 'next/head';

const skills = () => {
  return (
    <>
      <Head>
        <title>Skills | MK</title>
        <meta name='keywords' content='skills' />
      </Head>
      <section className='min-h-screen w-full flex flex-wrap flex-col items-center h-full pb-4'>
        <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Skills
        </h1>
        <div className='w-full flex flex-wrap flex-col p-8 pt-0 md:p-0 md:flex-row justify-evenly h-full'>
          {/* first column */}
          <LanguagesColumn />
          {/* second column */}
          <ToolsColumn />
        </div>
        <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Back-End
        </h1>
        <div className='w-full flex flex-wrap flex-col p-8 pt-0 md:p-0 md:flex-row justify-evenly h-full'>
          {/* first column */}
          <BackEndEnvironmentsColumn />
          {/* second column */}
          <BackEndServicesColumn />
          {/* third column */}
          <BackEndFrameworksColumn />
          {/* fourth column */}
          <BackEndDatabasesColumn />
          {/* fifth column */}
          <BackEndToolsColumn />
        </div>
        <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Front-End
        </h1>
        <div className='w-full flex flex-wrap flex-col p-8 pt-0 md:p-0 md:flex-row justify-evenly h-full'>
          {/* first column */}
          <FrontEndLanguagesColumn />
          {/* second column */}
          <FrontEndLibrariesColumn />
          {/* third column */}
          <FrontEndFrameworksColumn />
          {/* fourth column */}
          <FrontEndToolsColumn />
        </div>
      </section>
    </>
  );
};
export default skills;
