import Link from 'next/link';
import { useGlobalContext } from '../context';
import ThemeToggle from '../ThemeToggle';

const SidebarLinks = () => {
  const { toggleSidebar } = useGlobalContext();

  return (
    <ul className='font-medium flex flex-col p-4 mt-4 border border-altGray rounded-lg bg-platina md:bg-platina'>
      <li>
        <Link href='/' onClick={toggleSidebar} className='nav-link-sidebar'>
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/projects'
          onClick={toggleSidebar}
          className='nav-link-sidebar'
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href='/skills'
          onClick={toggleSidebar}
          className='nav-link-sidebar'
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          href='/about'
          onClick={toggleSidebar}
          className='nav-link-sidebar'
        >
          About
        </Link>
      </li>
      <li className='block py-2 pl-3 pr-4 rounded'>
        <ThemeToggle />
      </li>
    </ul>
  );
};
export default SidebarLinks;
