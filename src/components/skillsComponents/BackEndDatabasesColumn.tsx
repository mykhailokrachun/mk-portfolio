import {
  SiAmazondynamodb,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
} from 'react-icons/si';

const BackEndDatabasesColumn = () => {
  return (
    <div className='flex flex-col h-full p-4 md:p-0'>
      <h1 className='text-altGray text-4xl mb-5 text-center'>Databases</h1>
      <div className='flex flex-col justify-start flex-wrap bg-platina border-2 border-altGray p-4 rounded-2xl hover:bg-altBlue hover:text-platina duration-500'>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiPostgresql />
          <span>PostgreSQL</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiMysql />
          <span>MySQL</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiMongodb />
          <span>MongoDB</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiAmazondynamodb />
          <span>DynamoDB</span>
        </article>
        <article className='h-auto inline-flex items-center space-x-2 text-xl p-3'>
          <SiRedis />
          <span>Redis</span>
        </article>
      </div>
    </div>
  );
};
export default BackEndDatabasesColumn;
