import Link from 'next/link';
import { useGlobalContext } from './context';
import { TypeAnimation } from 'react-type-animation';
import SidebarLinks from './navigationComponents/SidebarLinks';

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <nav className='border-altGray sticky top-0 z-[999]'>
      <div className='w-full bg-platina flex flex-wrap items-center justify-end mx-auto p-4 shadow-md'>
        <Link href='/' className='mr-auto ml-5 font-body text-altBlue text-2xl'>
          MK
        </Link>
        <TypeAnimation
          sequence={['open me ➚', 2000]}
          wrapper='span'
          cursor={false}
          repeat={1}
          speed={{ type: 'keyStrokeDelayInMs', value: 110 }}
          className='text-altBlue text-lg font-[550] pt-5'
        />
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className={`inline-flex items-center p-2 ml-3 text-sm text-altGray rounded-lg hover:bg-altBlue hover:text-platina focus:outline-none focus:ring-2 ${
            isSidebarOpen && 'rotate-90'
          } duration-500`}
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={toggleSidebar}
        >
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div className={`${isSidebarOpen || 'hidden'} w-full`}>
          <SidebarLinks />
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
