import { useState } from 'react';
import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mwkjrbzy');
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    subject: '',
    msg: '',
  });
  const { name, email, subject, msg } = formInputs;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInputs((previous) => {
      return { ...previous, [name]: value };
    });
  };

  return (
    <section
      className='relative w-full flex flex-wrap justify-center pb-10 pt-24 md:pt-0'
      id='contact-form'
    >
      <form onSubmit={handleSubmit}>
        <div className='relative flex flex-col w-screen md:justify-center xl:px-[30rem] px-4 text-lg rounded-2xl'>
          <h1 className='text-left md:text-center text-3xl md:text-6xl md:mb-5 text-altGray px-4'>
            Contact me
          </h1>
          <input
            type='text'
            name='name'
            id={name}
            value={name}
            onChange={handleChange}
            className='form-input'
            placeholder='Your name'
            required
          />
          <input
            type='email'
            name='email'
            id={email}
            value={email}
            onChange={handleChange}
            className='form-input'
            placeholder='Your email'
            required
          />
          <input
            type='text'
            name='subject'
            id={subject}
            value={subject}
            onChange={handleChange}
            className='form-input'
            placeholder='Subject'
            required
          />
          <textarea
            name='msg'
            id={msg}
            value={msg}
            onChange={handleChange}
            className='resize-none pt-2 h-30 my-2 px-4 rounded-2xl bg-whiteforform focus:ring-2 focus:ring-altBlue valid:text-altGray invalid:text-blood'
            placeholder='Your message...'
            rows={4}
            required
          />
          {state.succeeded ? (
            <h1 className='my-2 px-4 text-altGray h-14 text-center text-2xl'>
              Thanks for your message !
            </h1>
          ) : (
            <button
              type='submit'
              disabled={state.submitting}
              className='my-2 px-4 border-2 border-altGray text-altGray rounded-2xl h-14 hover:bg-altBlue hover:text-platina duration-500'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
export default ContactForm;
