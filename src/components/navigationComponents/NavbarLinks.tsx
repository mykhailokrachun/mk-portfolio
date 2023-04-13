import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const NavbarLinks = () => {
  return (
    <ul className='w-max h-max flex flex-row flex-wrap justify-center md:p-4 md:pr-20 rounded-lg items-center md:flex-row md:space-x-20 md:mt-0 text-xl md:font-medium border-0'>
      <li>
        <Link href='/' className='nav-link'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/projects' className='nav-link'>
          Projects
        </Link>
      </li>
      <li>
        <Link href='/skills' className='nav-link'>
          Skills
        </Link>
      </li>
      <li>
        <Link href='/about' className='nav-link'>
          About
        </Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
};
export default NavbarLinks;
