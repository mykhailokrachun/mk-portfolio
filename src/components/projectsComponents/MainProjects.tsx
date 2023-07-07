import Link from 'next/link';
import Image from 'next/image';
import eCommercePreview from '../../../public/furniShopPreview.jpeg';
import portfolioPreviewLight from '../../../public/portfolioPreviewLight.png';
import portfolioPreviewDark from '../../../public/portfolioPreviewDark.png';
import jobTrackerPreview from '../../../public/jobTrackerPreview.png';
import githubAnalyzerPreview from '../../../public/githubAnalyzerPreview.png';
import awsPreview from '../../../public/awsPreview.png';
import jobsAPIPreview from '../../../public/jobsAPIPreview.png';
import { GrReactjs } from 'react-icons/gr';
import {
  SiStyledcomponents,
  SiRedux,
  SiAxios,
  SiCreatereactapp,
  SiVite,
  SiTailwindcss,
  SiAuth0,
  SiServerless,
  SiAmazondynamodb,
  SiSwagger,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaAws, FaNode } from 'react-icons/fa';
import styles from '../../styles/MainProjects.module.css';
import { useTheme } from 'next-themes';

const MainProjects = () => {
  const { theme } = useTheme();

  return (
    <section className='w-full h-auto'>
      <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-4 md:p-4 text-center'>
        Main Projects
      </h1>
      <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-4 md:p-4 text-center'>
        Back-End
      </h1>
      <div className='w-full p-8 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-10 md:gap-10 md:px-20'>
        {/* first column */}
        <article className={styles.article}>
          <Link href='https://github.com/mykhailokrachun/aws-shortlinker-api'>
            <Image
              src={awsPreview}
              alt='aws preview'
              className='w-full h-auto'
            />
          </Link>
          <h1 className={styles.h1project}>AWS Shortlinker API</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <FaAws />
              <span>AWS</span>
            </article>
            <article className={styles.techUsed}>
              <FaNode />
              <span>NodeJS</span>
            </article>
            <article className={styles.techUsed}>
              <SiServerless />
              <span>Serverless</span>
            </article>
            <article className={styles.techUsed}>
              <SiAmazondynamodb />
              <span>DynamoDB</span>
            </article>
            <article className={styles.techUsed}>
              <SiSwagger />
              <span>Swagger</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases AWS-native link shortener service. User can
            register or log in and after that provide any link and expire date
            and receive shortened version of it that will expire according to
            request (after visit, in 1 day, in 3 days or in 7 days). After
            expiration of link, user, who created this link, will receive email
            notification.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://gpmlwrxkz1.execute-api.us-east-1.amazonaws.com/swagger'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/aws-shortlinker-api'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* second column */}
        <article className={styles.article}>
          <Link href='https://jobs-api-qmdt.onrender.com/'>
            <Image
              src={jobsAPIPreview}
              alt='eCommerce preview'
              className='w-full h-full'
            />
          </Link>
          <h1 className={styles.h1project}>Jobs API</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <FaNode />
              <span>NodeJS</span>
            </article>
            <article className={styles.techUsed}>
              <SiExpress />
              <span>Express</span>
            </article>
            <article className={styles.techUsed}>
              <SiMongodb />
              <span>MongoDB</span>
            </article>
            <article className={styles.techUsed}>
              <SiSwagger />
              <span>Swagger</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases a job application tracker where user can register
            or login and CRUD job applications and check statistics of them
            through API.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://jobs-api-qmdt.onrender.com/api-docs/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/jobs-api'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
      </div>
      <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-4 md:p-4 text-center'>
        Front-End
      </h1>
      <div className='w-full p-8 grid grid-rows-3 md:grid-rows-none md:grid-cols-4 gap-10 md:gap-10 md:px-20'>
        {/* first column */}
        <article className={styles.article}>
          <Link href='https://mykhailok-job-application-tracker.netlify.app/'>
            <Image
              src={jobTrackerPreview}
              alt='jobTracker preview'
              className='w-full h-auto'
            />
          </Link>
          <h1 className={styles.h1project}>Job Application Tracker</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiRedux />
              <span>Redux</span>
            </article>
            <article className={styles.techUsed}>
              <SiStyledcomponents />
              <span>styled-components</span>
            </article>
            <article className={styles.techUsed}>
              <SiAxios />
              <span>Axios</span>
            </article>
            <article className={styles.techUsed}>
              <SiVite />
              <span>Vite</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases a job application tracker where user can CRUD job
            applications and check statistics of them but firstly user must
            register or use a demo account. All data is stored on a server.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-job-application-tracker.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/job-application-tracker'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* second column */}
        <article className={styles.article}>
          <Link href='https://mykhailok-furni-shop.netlify.app/'>
            <Image
              src={eCommercePreview}
              alt='eCommerce preview'
              className='w-full h-full'
            />
          </Link>
          <h1 className={styles.h1project}>eCommerce Website</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiStyledcomponents />
              <span>styled-components</span>
            </article>
            <article className={styles.techUsed}>
              <SiAuth0 />
              <span>Auth0</span>
            </article>
            <article className={styles.techUsed}>
              <SiCreatereactapp />
              <span>CRA</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases a fully functional shop with furniture where users
            can discover different types of products, filter, and buy them.
            Auth0 is connected for authentication and Stripe for checkout and
            useReducer for State Management.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-furni-shop.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/furni-shop'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* third column */}
        <article className={styles.article}>
          <Link href='https://mykhailok-portfolio.netlify.app'>
            <Image
              src={
                theme === 'dark' ? portfolioPreviewDark : portfolioPreviewLight
              }
              alt='portfolio preview'
              className='w-full h-auto'
            />
          </Link>
          <h1 className={styles.h1project}>My Portfolio</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiTailwindcss />
              <span>Tailwind CSS</span>
            </article>
            <article className={styles.techUsed}>
              <TbBrandNextjs />
              <span>Next.js</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases my portfolio with a Multi-Page approach and
            light/dark modes. In this project, users can discover my skills,
            projects, some general information about me and contact me through a
            form.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-portfolio.netlify.app'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/mk-portfolio'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* fourth column */}
        <article className={styles.article}>
          <Link href='https://mykhailok-github-analyzer.netlify.app/'>
            <Image
              src={githubAnalyzerPreview}
              alt='githubAnalyzer preview'
              className='w-full h-auto'
            />
          </Link>
          <h1 className={styles.h1project}>GitHub Analyzer</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-2'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiStyledcomponents />
              <span>styled-components</span>
            </article>
            <article className={styles.techUsed}>
              <SiAxios />
              <span>Axios</span>
            </article>
            <article className={styles.techUsed}>
              <TbBrandNextjs />
              <span>Next.js</span>
            </article>
            <article className={styles.techUsed}>
              <SiAuth0 />
              <span>Auth0</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Project showcases a GitHub Analyzer where user can check all info of
            any user on GitHub including: followers,number of repos, most used
            languages, most popular repos, stars per language and other info but
            firstly user must register.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-github-analyzer.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/github-analyzer'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};
export default MainProjects;
