import SocialLinks from 'components/reuseable/SocialLinks';
import NextLink from 'components/reuseable/links/NextLink';
import footerNav from 'data/footer';

const Footer11 = () => {
  return (
    <footer className="bg-white">
      <div className="container py-3 py-md-">
        <div className="d-flex flex-row flex-wrap align-items-start justify-content-between"> {/* Flexbox container */}
          {/* Logo and Social Links */}
          <div className="widget" style={{ flex: '1 1 20%', minWidth: '200px' }}>
            <img
              className="mb-4"
              src="/img/Website/Page Logo 1.png"
              srcSet="/img/Website/Page Logo 1.png"
              alt=""
              style={{ width: '140px', height: 'auto' }}
            />
            <p className="mb-4">
              Proud Trade Partner <br />
              <strong>S&P Global Metals Award Winner</strong>
              <br /> <strong>2020 Company</strong> based in
              <br /> <strong>Switzerland.</strong>
            </p>
           
          </div>

          {/* Head Office - INDIA */}
          <div className="widget" style={{ flex: '1 1 20%', minWidth: '200px' }}>
            <h4 className="widget-title mb-3" style={{ color: '#111' }}>Head Office - INDIA</h4>
            <address className="pe-xl-15 pe-xxl-17">
              P. O. Box 411023, West Coast Park, Pune, MH, India.
            </address>
            <NextLink title="sales@yophiel.net" href="mailto:sales@yophiel.net" className="link-body" style='' />
            <br /> +91 9637 422525
          </div>

          {/* Communication Office - UAE */}
          <div className="widget" style={{ flex: '1 1 20%', minWidth: '200px' }}>
            <h4 className="widget-title mb-3" style={{ color: '#111' }}>Communication Office - UAE</h4>
            <address className="pe-xl-15 pe-xxl-17">
              WH 07, BLOCK 07, Industrial Area 2, Ajman - UAE.
            </address>
            <NextLink title="sales@yophiel.net" href="mailto:sales@yophiel.net" className="link-body" />
            <br /> +971 509014345
          </div>

          {/* Learn More Links */}
          <div className="widget" style={{ flex: '1 1 20%', minWidth: '200px' }}>
            <h4 className="widget-title mb-3" style={{ color: '#111' }}>Learn More</h4>
            <ul className="list-unstyled text-reset mb-0">
              {footerNav.map(({ title, url }) => (
                <li key={title}>
                  <NextLink title={title} href={url} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '60px', // Adjust height as needed
          background: 'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <p style={{ margin: 0, fontSize:'20px' }}>
        <strong>Copyright © {new Date().getFullYear()} </strong><strong>yophiel.net | Yophiel Internationals Pvt. Ltd. | All Rights Reserved.</strong> 
        </p>
      </div>

    </footer>
  );
};

export default Footer11;