import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className='relative h-auto bg-altGray w-screen flex flex-wrap justify-center items-center'>
      <div className='relative flex flex-wrap items-middle flex-col'>
        <h2 className='text-whiteforform text-2xl text-center mt-6'>
          Mykhailo&apos;s Portfolio
        </h2>
        <p className='text-platina text-xl text-center px-4'>
          Thanks for visiting my personal portfolio website. Connect with me
          through contact form or socials
        </p>
        <h2 className='text-whiteforform text-2xl text-center'>Contact info</h2>
        <div className='w-full flex flex-col md:flex-row justify-center items-center'>
          <div className='flex items-center'>
            <BsFillTelephoneFill className='text-xl text-platina mx-2 md:mx-3' />
            <h3 className='text-platina text-xl md:mx-2'>
              +380 (50) 038 62 65
            </h3>
          </div>
          <div className='flex items-center'>
            <GrMail className='text-xl text-platina mx-2 md:mx-3' />
            <h3 className='text-platina text-xl md:mx-2'>
              mykhailokrachun@gmail.com
            </h3>
          </div>
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
