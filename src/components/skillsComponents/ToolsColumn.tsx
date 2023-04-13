import { SiStyledcomponents, SiRedux, SiAxios } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const ToolsColumn = () => {
  return (
    <div className='flex flex-col h-full p-4 md:p-0'>
      <h1 className='text-altGray text-4xl mb-5 text-center'>Tools</h1>
      <div className='flex flex-col justify-start flex-wrap bg-platina border-2 border-altGray p-4 rounded-2xl hover:bg-altBlue hover:text-platina duration-500'>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <BsGit />
          <span>Git</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiRedux />
          <span>Redux</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiStyledcomponents />
          <span>styled-components</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiAxios />
          <span>Axios</span>
        </article>
      </div>
    </div>
  );
};
export default ToolsColumn;
