import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';

const FrontEndLanguagesColumn = () => {
  return (
    <div className='flex flex-col h-full p-4 md:p-0'>
      <h1 className='text-altGray text-4xl mb-5 text-center'>Languages</h1>
      <div className='flex flex-col justify-start flex-wrap bg-platina border-2 border-altGray p-4 rounded-2xl hover:bg-altBlue hover:text-platina duration-500'>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <AiFillHtml5 />
          <span>HTML</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <IoLogoCss3 />
          <span>CSS</span>
        </article>
      </div>
    </div>
  );
};
export default FrontEndLanguagesColumn;
