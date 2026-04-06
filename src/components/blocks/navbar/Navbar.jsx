import { Fragment, useRef } from 'react';
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';

import Info from './partials/Info';
import Search from './partials/Search';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import MiniCart from './partials/MiniCart';

import NavLinko from 'components/reuseable/links/NavLink';
import Buttono from 'components/reuseable/links/Buttono';

const Navbar = (props) => {
  const {
    navClassName,
    info,
    search,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
  } = props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      <style jsx global>{`
        /* ── Nav links ── */
        .navbar .nav-link {
          font-size: 17px !important;
          font-weight: 700 !important;
          color: #1a1a2e !important;
          letter-spacing: 0.03em;
          padding: 10px 22px !important;
          transition: color 0.2s ease !important;
        }
        .navbar .nav-link:hover {
          color: rgb(0,166,228) !important;
        }

        /* ── Dropdown menu ── */
        .navbar .dropdown-menu {
          border: none !important;
          border-radius: 14px !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.14) !important;
          padding: 8px !important;
          border-top: 3px solid rgb(0,166,228) !important;
          min-width: 220px !important;
          margin-top: 8px !important;
        }
        .navbar .dropdown-item {
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #2d3748 !important;
          border-radius: 8px !important;
          padding: 10px 14px !important;
          transition: background 0.18s, color 0.18s !important;
        }
        .navbar .dropdown-item:hover {
          background: rgba(0,166,228,0.08) !important;
          color: rgb(0,166,228) !important;
        }

        /* ── Download Brochure button ── */
        .yn-brochure-btn {
          display: inline-block;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          color: #fff !important;
          font-size: 12.5px !important;
          font-weight: 800 !important;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 10px 22px !important;
          border-radius: 50px !important;
          border: none !important;
          box-shadow: 0 4px 16px rgba(0,166,228,0.30);
          transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
          white-space: nowrap;
          text-decoration: none !important;
        }
        .yn-brochure-btn:hover {
          opacity: 0.88;
          box-shadow: 0 8px 24px rgba(0,166,228,0.40);
          transform: translateY(-1px);
          color: #fff !important;
        }

        /* ── Bottom accent line ── */
        .yn-accent-line {
          height: 3px;
          background: linear-gradient(135deg, rgb(0,166,228) 0%, rgb(121,191,30) 100%);
          margin: 0;
        }
      `}</style>

      {/* Logo */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <img
              alt="logo"
              src="/img/Website/Page Logo 1.png"
              style={{ width: '150px', height: 'auto' }}
            />
          }
        />
      </div>

      {/* Original Bootstrap offcanvas nav — structure untouched */}
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLinko title="Home" href="/" className="nav-link" />
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink title="About Us" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu">
                <ListItemLink href="/whoweare"  title="Who We Are"  linkClassName="dropdown-item" />
                <ListItemLink href="/ourvalues" title="Our Values"  linkClassName="dropdown-item" />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <DropdownToggleLink title="Business Lines" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu">
                <ListItemLink href="/oilfield"   title="Oil & Gas"                            linkClassName="dropdown-item" />
                <ListItemLink href="/lubricants" title="Lubricants & Grease"                  linkClassName="dropdown-item" />
                <ListItemLink href="/personal"   title="Home, Personal & Industrial Cleaning" linkClassName="dropdown-item" />
                <ListItemLink href="/plastics"   title="Plastics & Rubber"                    linkClassName="dropdown-item" />
                <ListItemLink href="/treatment"  title="Water Treatment"                      linkClassName="dropdown-item" />
                <ListItemLink href="/paints"     title="Paints & Coatings"                    linkClassName="dropdown-item" />
              </ul>
            </li>

            <li className="nav-item dropdown">
              <DropdownToggleLink title="Services" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu">
                <ListItemLink href="/engneering"  title="Engineering Services"          linkClassName="dropdown-item" />
                <ListItemLink href="/procurement" title="Procurement"                   linkClassName="dropdown-item" />
                <ListItemLink href="/engneering"  title="Formulation Chemistry Support" linkClassName="dropdown-item" />
                <ListItemLink href="/engneering"  title="Blending Solutions"            linkClassName="dropdown-item" />
              </ul>
            </li>

            <li className="nav-item dropdown dropdown-mega">
              <NavLinko title="Contact Us" href="/contact-2" className="nav-link" />
            </li>
          </ul>

          {/* Mobile brochure button */}
          <div className="mt-3 d-lg-none">
            <Buttono
              title="Download Brochure"
              className="btn w-100 yn-brochure-btn"
              style={{}}
              downloadLink="https://drive.google.com/file/d/1YbXu5NtP98UmbKWDTNfVw4Aj8RJefGev/view?usp=sharing"
            />
          </div>

          <div className="offcanvas-footer d-lg-none mt-auto">
            <div>
              <NextLink title="sales@yophiel.net" className="link-inverse" href="mailto:sales@yophiel.net" />
              <br />
              <NextLink href="tel:9637422525" title="+91-9637422525" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
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

        {/* Desktop brochure button */}
        <div className="ms-auto d-none d-lg-block">
          <Buttono
            title="Download Brochure ↓"
            className="yn-brochure-btn"
            style={{}}
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
          <div className="container flex-lg-row flex-nowrap align-items-center" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            {headerContent}
          </div>
        )}
      </nav>

      <Signin />
      <Signup />
      {info && <Info />}
      {search && <Search />}
      {cart && <MiniCart />}
      <div className="yn-accent-line" />
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
