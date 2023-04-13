import { TypeAnimation } from 'react-type-animation';
import { useGlobalContext } from './context';
import Lottie from 'lottie-react';
import lightAnimation from '../../public/lightAnimation.json';
import darkAnimation from '../../public/darkAnimation.json';
import { useTheme } from 'next-themes';

const Home = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  const { theme } = useTheme();

  return (
    <div
      className='min-h-screen w-full grid grid-cols-1 xl:grid-cols-2 mt-[5rem] xl:mt-0 xl:items-start text-center xl:text-start'
      onClick={() => {
        if (isSidebarOpen) {
          toggleSidebar();
        }
      }}
    >
      <div className='flex flex-col justify-center items-center z-[1]'>
        <article className='w-full xl:w-2/3 h-full text-altGray font-[700] text-[3rem] xl:mt-[30%]'>
          Hello, I'm
          <br />
          Mykhailo
          <br />
          <span className='text-[2rem]'>I am into </span>
          <br className='md:hidden' />
          <TypeAnimation
            sequence={['Web Development', 2000]}
            wrapper='span'
            cursor={true}
            repeat={1}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            className='text-altBlue text-[2rem]'
          />
          <div className='xl:absolute mx-10 lg:mx-0 grid lg:grid-cols-2 gap-6 py-4 text-lg text-center'>
            <a
              href='#contact-form'
              className='h-auto font-[600] text-altGray border-2 border-altGray rounded-full p-3 bg-platina hover:bg-altBlue hover:text-platina duration-500'
            >
              Contact me
            </a>
            <button className='h-auto font-[600] text-altGray border-2 border-altGray rounded-full p-3 bg-platina hover:bg-altBlue hover:text-platina duration-500'>
              <a href='./mk_resume_eng.pdf' download>
                Download Resume
              </a>
            </button>
          </div>
        </article>
      </div>
      {theme === 'dark' ? (
        <Lottie
          animationData={darkAnimation}
          loop={true}
          className='hidden xl:flex flex-col justify-center items-center lg:mt-[-8%]'
        />
      ) : (
        <Lottie
          animationData={lightAnimation}
          loop={true}
          className='hidden xl:flex flex-col justify-center items-center lg:mt-[-8%]'
        />
      )}
    </div>
  );
};
export default Home;
