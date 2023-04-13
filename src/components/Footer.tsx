import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className='relative h-auto bg-altGray w-screen flex flex-wrap justify-center items-center'>
      <div className='relative flex flex-wrap items-middle flex-col'>
        <h1 className='text-whiteforform text-2xl text-center mt-6'>
          Mykhailo&apos;s Portfolio
        </h1>
        <p className='text-platina text-xl text-center px-4'>
          Thanks for visiting my personal portfolio website. Connect with me
          through contact form or socials
        </p>
        <h1 className='text-whiteforform text-2xl text-center'>Contact info</h1>
        <div className='flex flex-row justify-center items-center '>
          <BsFillTelephoneFill className='text-xl text-platina mx-2 md:mx-3' />
          <h1 className='text-platina text-xl md:mr-2'>+380 (50) 038 62 65</h1>
          <GrMail className='text-xl text-platina mx-2 ' />
          <h1 className='text-platina text-xl pr-4 md:pr-0'>
            mykhailokrachun@gmail.com
          </h1>
        </div>
        <div className='flex flex-row flex-wrap items-middle justify-center space-x-2 my-6'>
          <Link
            href='https://github.com/mykhailokrachun'
            className='text-platina text-5xl hover:text-altBlue hover:border-2 hover:rounded-full duration-500 '
          >
            <AiFillGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/mykhailo-krachun-98516025a/'
            className='text-platina text-5xl hover:text-altBlue hover:border-2 ease-out duration-500'
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
