import Link from 'next/link';
import styles from '../../styles/MiniProjects.module.css';
import { GrReactjs } from 'react-icons/gr';
import { SiCreatereactapp } from 'react-icons/si';

const MiniProjects = () => {
  return (
    <section className='w-full h-auto'>
      <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-4 md:p-4 text-center'>
        Mini Projects
      </h1>
      <h1 className='text-[3rem] text-altBlue font-[700] p-2 pb-0 md:pb-4 md:p-4 text-center'>
        Front-End
      </h1>
      <div className='w-full p-8 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-10 md:gap-10 md:px-20'>
        {/* first column */}
        <article className={styles.article}>
          <h1 className={styles.h1project}>Color Generator</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-4'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiCreatereactapp />
              <span>CRA</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Simple color generator where user can enter hex color code and
            receive 10 darker options and 10 lighter options of this color with
            hex color codes and copy by clicking on them.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-color-generator.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/color-generator'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* second column */}
        <article className={styles.article}>
          <h1 className={styles.h1project}>CocktailsDB</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-4'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiCreatereactapp />
              <span>CRA</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            Informational project about cocktails with a Multi-Page approach and
            external API for data where users can discover or search for some
            cocktails in the database. Every cocktail has an individual page
            with information about it.
          </p>
          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-cocktails-db.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/cocktails-db'
              className={styles.linkButton}
            >
              Source
            </Link>
          </div>
        </article>
        {/* third column */}
        <article className={styles.article}>
          <h1 className={styles.h1project}>Stock Photos</h1>
          {/* tech used */}
          <div className='flex flex-wrap items-center p-4'>
            <article className={styles.techUsed}>
              <GrReactjs />
              <span>React</span>
            </article>
            <article className={styles.techUsed}>
              <SiCreatereactapp />
              <span>CRA</span>
            </article>
          </div>
          <p className='text-lg p-4'>
            A simple project where users can search for stock photos. This
            project implements an infinite scrolling function that continues to
            parse images until they run out.
          </p>

          <div className='w-full grid grid-cols-2 p-4 space-x-2'>
            <Link
              href='https://mykhailok-stock-photos.netlify.app/'
              className={styles.linkButton}
            >
              Demo
            </Link>
            <Link
              href='https://github.com/mykhailokrachun/stock-photos'
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
export default MiniProjects;
