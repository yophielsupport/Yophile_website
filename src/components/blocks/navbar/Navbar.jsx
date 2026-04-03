import Link from 'next/link';
import { Fragment, useRef } from 'react';
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';

import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart';

import { demos, pages, blogsNavigation, blocksNavigation, projectsNavigation, documentionNavigation, aboutus } from 'data/navigation';
import IconLink from 'components/reuseable/links/IconLink';
import NavLinko from 'components/reuseable/links/NavLink';
import Buttono from 'components/reuseable/links/Buttono';

const Navbar = (props) => {
  const {
    navClassName,
    info,
    search,
    social,
    language,
    button,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
    logoAlt
  } = props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const renderLinks = (links) => {
    return links.map(item => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  const headerContent = (
    <Fragment>
     <div className="navbar-brand w-100">
  <NextLink
    href="/"
    title={
      <img
        alt="logo"
        src={`/img/Website/Page Logo 1.png`}
        style={{ width: '150px', height: 'auto' }} // Adjust width and height as needed
      />
    }
  />
</div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Yophiel</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav" style={{color:'rgb(0, 0, 0)'}}>
            <li className="nav-item dropdown">
              <DropdownToggleLink title="About Us" className="nav-link dropdown-toggle" style={{color:'rgb(0, 0, 0)'}} />
              <ul className="dropdown-menu">
                <ListItemLink href="/whoweare" title="Who we are" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/ourvalues" title="Our Values" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <DropdownToggleLink title="Business Lines" className="nav-link dropdown-toggle" style={{color:'rgb(0, 0, 0)'}} />
              <ul className="dropdown-menu">
                <ListItemLink href="/oilfield" title="Oilfield & Refinery Chemicals" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/lubricants" title="Lubricants & Grease Additives" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/personal" title="Personal & Home Care" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/plastics" title="Plastics & Rubber" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/treatment" title="Water Treatment Chemicals" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
              </ul>
            </li>

            <li className="nav-item dropdown" style={{color:'rgb(0, 0, 0)'}}>
              <DropdownToggleLink title="Resources" className="nav-link dropdown-toggle" style={{color:'rgb(0, 0, 0)'}} />
              <ul className="dropdown-menu">
                <ListItemLink href="/engneering" title="Engineering Services" linkClassName="dropdown-item" style={{ color: 'rgb(1, 1, 1)' }} />
                <ListItemLink href="/procurement" title="Procurement" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
                <ListItemLink href="/contracts" title="Maintenance Contracts" linkClassName="dropdown-item" style={{ color: '#4A90E2' }} />
              </ul>
            </li>

            <li className="nav-item dropdown dropdown-mega">
              <NavLinko title="Contact Us" href="/contact-2" className="nav-link" style={{color:'rgb(0, 0, 0)'}} />
            </li>
          </ul>

          {/* Download Brochure button in offcanvas for mobile (hidden on large) */}
          <div className="mt-3 d-lg-none">
            <Buttono
              title="Download Brochure"
              className="btn btn-primary w-100"
              style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
              downloadLink="https://pdfobject.com/pdf/sample.pdf"
            />
          </div>

          <div className="offcanvas-footer d-lg-none mt-auto">
            <div>
              <NextLink title="sales@yophiel.net" className="link-inverse" href="mailto:sales@yophiel.net" style={{ color: '#4A90E2' }} />
              <br />
              <NextLink href="tel:9637422525" title="+91-9637422525" style={{ color: '#4A90E2' }} />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" style={{ color: '#4A90E2' }} />
              </a>
            </li>
          )}

          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" style={{ color: '#4A90E2' }} />
              </a>
            </li>
          )}

          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              className="hamburger offcanvas-nav-btn"
            >
              <span />
            </button>
          </li>
        </ul>

        {/* Download Brochure button on large screens (hidden on mobile) */}
        <div className="ms-auto d-none d-lg-block">
          <Buttono
            title="Download Brochure"
            className="btn btn-primary"
            style={{ backgroundColor: 'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)', borderColor: ' #04b5ac' }}
            downloadLink="https://drive.google.com/file/d/1YbXu5NtP98UmbKWDTNfVw4Aj8RJefGev/view?usp=sharing"
          />
        </div>
      </div>
      
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav
        ref={navbarRef}
        className={sticky ? fixedClassName : navClassName}
        style={{
          backgroundColor: sticky ? '#ffffff' : '#F5F5F5',
          boxShadow: sticky ? '0 2px 20px rgba(0,0,0,0.10)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center mb-3">{headerContent}</div>
        )}
      </nav>

      <Signin />
      <Signup />
      {info && <Info />}
      {search && <Search />}
      {cart && <MiniCart />}
      <div style={{ height: '3px', background: 'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%)', margin: '0' }} />
    </Fragment>
  );
};

Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;