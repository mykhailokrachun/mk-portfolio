const EducationColumn = () => {
  return (
    <div className='w-full p-5'>
      {/* Experience */}
      <div className='w-full p-4 md:p-0'>
        <h1 className='text-3xl text-center text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Experience
        </h1>
        <div className='flex flex-col justify-start flex-wrap bg-platina p-4 text-2xl '>
          <ul className='relative list-inside border-l-2 border-altGray box-border'>
            <li className='relative before:content-["●"] before:text-6xl before:text-altBlue px-4 before:left-[-1.2rem] before:top-[-1.3rem] before:absolute'>
              Serverless Team
              <h2 className='text-lg relative'>Full-Stack Developer</h2>
              <time className='relative'>7/2022 - Present</time>
            </li>
          </ul>
        </div>
      </div>
      {/* end of Experience */}
      {/* Education */}
      <div className='w-full p-4 md:p-0'>
        <h1 className='text-3xl text-center text-altBlue font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          Education
        </h1>
        <div className='flex flex-col justify-start flex-wrap bg-platina p-4 text-2xl '>
          <ul className='relative list-inside border-l-2 border-altGray box-border'>
            <li className='relative before:content-["●"] before:text-6xl before:text-altBlue px-4 before:left-[-1.2rem] before:top-[-1.3rem] before:absolute'>
              Institute of International Relations, Taras Shevchenko National
              University of Kyiv
              <h2 className='text-lg relative'>
                Bachelor of International Economic Relations, Educational
                Program International Business
              </h2>
              <time className='relative'>9/2018 - 6/2022</time>
            </li>
            <li className='relative before:content-["●"] before:text-4xl before:text-altBlue px-4 before:left-[-0.75rem] before:top-[-0.32rem] before:absolute'>
              Institute of International Relations, Taras Shevchenko National
              University of Kyiv
              <h2 className='text-lg relative'>
                Master of International Economic Relations,
                <br className='md:hidden' /> Educational Program International
                Business
              </h2>
              <time className='relative'>9/2022 - 12/2023</time>
            </li>
          </ul>
        </div>
      </div>
      {/* end of Education */}
      {/* About me */}
      <div className='flex flex-col p-4 md:p-0'>
        <h1 className='text-3xl text-altBlue text-center font-[700] p-2 pb-0 md:pb-10 md:p-10'>
          About me
        </h1>
        <div className='flex flex-col justify-start flex-wrap bg-platina border-2 border-altGray p-4 rounded-2xl hover:bg-altBlue hover:text-platina duration-500'>
          <article className='h-auto inline-flex items-center justify-between space-x-2 text-xl p-3'>
            <h1>Full name:</h1>
            <h1>Mykhailo Krachun</h1>
          </article>
          <article className='h-auto inline-flex items-center justify-between  space-x-2 text-xl p-3'>
            <h1>Age:</h1>
            <h1>22</h1>
          </article>
          <article className='h-auto inline-flex items-center justify-between  space-x-2 text-xl p-3'>
            <h1>Location:</h1>
            <h1>Kyiv, Ukraine</h1>
          </article>
          <article className='h-auto inline-flex items-center justify-between  space-x-2 text-xl p-3'>
            <h1>Languages:</h1>
            <h1>
              🇬🇧English <br /> 🇺🇦Ukrainian
            </h1>
          </article>
        </div>
      </div>
      {/* end of About me */}
    </div>
  );
};
export default EducationColumn;
