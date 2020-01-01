import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';
import logo from '../../assets/icons/Logo.png';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      <NavBar>
        <div>
          <HeaderLink to="/">
            <FormattedMessage {...messages.Shop} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.Service} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </div>
        <HeaderLink to="/">
          <img width="90px" height="30px" src={logo} alt="logo" />
        </HeaderLink>
        <div>
          <HeaderLink to="/design-lab">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </div>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
