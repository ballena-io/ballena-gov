import React from 'react';

import Footer from '../footer';
import Header from '../header';
import { Container } from './style';

// import Pastures from '../pastures';
const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
    {/* <Pastures /> */}
  </Container>
);

export default Layout;
