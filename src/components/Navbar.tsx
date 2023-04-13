import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import NavbarLinks from './navigationComponents/NavbarLinks';
// backdrop - blur - sm;

const Navbar = () => {
  return (
    <nav className='h-1/4 px-8 sm:px-4 py-4 md:py-2.5 rounded sticky top-0 z-50 w-full bg-platina shadow-md'>
      <div className='flex flex-row items-center text-center justify-center md:justify-end'>
        <Link
          href='/'
          className='mr-auto ml-20 font-body text-altBlue text-2xl'
        >
          MK
        </Link>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
