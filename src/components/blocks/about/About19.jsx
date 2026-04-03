import { Fragment } from 'react';

const About19 = () => {
  return <Fragment>
      <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
        

        <div className="col-lg-11">
          <h3 className="display-4 mb-2 mb-5 text-start" style={{fontWeight:'800'}}>
            <span style={{color:'#000'}}>Energizing </span>
            <span style={{background:'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(0,180,160) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>PEOPLE</span>
            <span style={{color:'#000'}}> ... Energizing </span>
            <span style={{background:'linear-gradient(135deg, rgb(0,166,228) 0%, rgb(0,180,160) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>CHEMISTRY</span>
          </h3>
          <p className="mb-6">
            Welcome from the global arena of Chemicals and Engineering, where excellence, innovation and performance meet.
            <br /><br />
            <strong style={{color:'#000', fontWeight:'800'}}>Yophiel Internationals</strong> is an internationally recognized chemical distribution and engineering services company, having been established in the western region. Ethics and integrity are the cornerstones upon which this firm was built, and we will endeavour to lead the industry in everything we do.
            <br /><br />
            Our innovative and value-added services include energy management, annual maintenance contracts, tolling and blending, and the procurement of raw materials.
            <br /><br />
            Our strong technical team and allied suppliers within the industry, enables us to strive for our customers and offer a wide range of performance oriented products.
            <br /><br />
            Our wide global network, in-depth knowledge of the industry, and extensive range of products enable us to support our clients with specialized solutions that maximize productivity and profitability.
          </p>


          {/* <ListColumn rowClass="gx-xl-8" list={aboutList2} /> */}
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10">
        <div className="col-12">
          <h5 style={{fontWeight:'800', textTransform:'uppercase', letterSpacing:'0.05em'}}>Our Vision</h5>
          <p className="mb-0">We aspire to be global leaders in each of our chosen businesses by 2030.</p>
        </div>
        <div className="col-12">
          <h5 style={{fontWeight:'800', textTransform:'uppercase', letterSpacing:'0.05em'}}>Our Mission</h5>
          <p className="mb-0">To be the most reliable global company for customers and suppliers, that delivers value and maximizes prosperity through products and services.</p>
        </div>
        <div className="col-12">
          <h5 style={{fontWeight:'800', textTransform:'uppercase', letterSpacing:'0.05em'}}>Our Values</h5>
          <img
            src="/img/photos/ourvalue.png"
            alt="Our Values - Integrity, Responsibility, Excellence, Unity, Respectful"
            style={{width:'100%', maxWidth:'700px', marginTop:'12px', display:'block'}}
          />
        </div>
      </div>
    </Fragment>;
};

export default About19;