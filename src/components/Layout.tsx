import React, { PropsWithChildren, Suspense, useEffect, useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import Loading from './Loading';

type WindowWidth = number | undefined;

const Layout = ({ children }: PropsWithChildren) => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>(undefined);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  if (!windowWidth) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      {windowWidth > 992 ? <Navbar /> : <SideBar />}
      {children}
      <Footer />
    </Suspense>
  );
};
export default Layout;
