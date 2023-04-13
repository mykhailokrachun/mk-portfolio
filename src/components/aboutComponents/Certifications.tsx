import Link from 'next/link';
import { certificationsData } from './certificationsData';

const Certifications = () => {
  return (
    <div className='w-full flex flex-col h-full p-9 md:p-4'>
      <h1 className='text-3xl text-center text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
        Certifications
      </h1>
      <div className='flex flex-col justify-start flex-wrap bg-platina p-4 text-2xl '>
        <ul className='relative list-inside border-l-2 border-altGray box-border'>
          {certificationsData.map(
            ({ id, platform, styles, courseName, certificateLink, time }) => {
              const { liClass, h2Class, linkClass, timeClass } = styles;
              return (
                <li key={id} className={liClass}>
                  {platform}
                  <h2 className={h2Class}>
                    {courseName}
                    <br className='md:hidden' />
                    <Link href={certificateLink} className={linkClass}>
                      Link to certificate
                    </Link>
                  </h2>
                  <h3 className={timeClass}>{time}</h3>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default Certifications;
