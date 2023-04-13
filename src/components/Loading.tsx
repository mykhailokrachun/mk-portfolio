import { Triangle } from 'react-loader-spinner';
import { useTheme } from 'next-themes';

const Loading = () => {
  const { theme } = useTheme();

  if (theme === 'dark') {
    return (
      <div className='w-screen h-screen flex items-center justify-center m-auto'>
        <Triangle
          height='200'
          width='200'
          color='#d23669'
          ariaLabel='triangle-loading'
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center m-auto'>
      <Triangle
        height='200'
        width='200'
        color='#3b6dec'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};
export default Loading;
