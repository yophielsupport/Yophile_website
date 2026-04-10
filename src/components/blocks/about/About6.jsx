import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn'; // -------- data -------- //
import { aboutList2 } from 'data/about';

const About6 = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center justify-content-center">
      {/* <div className="col-lg-6 position-relative order-lg-2"> */}
        {/* If you want to display the Tiles component, uncomment the line below */}
        {/* <Tiles5 /> */}
      {/* </div> */}

      <div className="col-lg-10 align-items-center">
        {/* If you want to display the Megaphone icon, uncomment the line below */}
        {/* <Megaphone className="icon-svg-md mb-4" /> */}

        

        <p className="lead fs-lg">
          Welcome to the global arena of chemicals, engineering, and resource management, where
          Products, Knowledge , and high-performance solutions converge to shape a more sustainable future.
        </p>

        <p className="lead mb-6">
          Yophiel Internationals is an internationally recognized chemical distribution and engineering 
          services firm that stands at the forefront of industry expertise, operational integrity, and 
          unparalleled client support. Established in the western region of India, we bring 
          together a team of dedicated professionals who are not only skilled engineers, chemists, and 
          logistics experts, but also strategic thinkers committed to driving growth and delivering 
          tangible value to every stakeholder we serve.
        </p>

        <p className="lead mb-6">
          Guided by a strong ethical framework and a forward-looking mindset, Yophiel Internationals 
          consistently pushes the boundaries of innovation. Our portfolio spans a comprehensive range 
          of chemical products, state-of-the-art engineering services, and solutions designed to 
          streamline supply chains, optimize manufacturing workflows, and elevate the performance of 
          industrial operations worldwide. We pride ourselves on cultivating long-term relationships 
          built on trust, transparency, and a shared vision of progress and prosperity.
        </p>

        <p className="lead mb-6">
          At Yophiel Internationals, we believe that success is measured not only by market share 
          and profitability but also by the positive impact we have on communities, the environment, 
          and the industries we serve. Our dedication to sustainability, compliance with international 
          standards, and commitment to workforce development is evidence of our holistic approach 
          to excellence.
        </p>

        <p className="lead mb-6">
          As we look ahead, Yophiel Internationals remains focused on embracing new technologies, 
          forging global partnerships, and leveraging our extensive network to meet the evolving 
          demands of a dynamic world. We invite you to discover how our expertise, agility, and 
          customer-centric approach can propel your endeavors to new heights of success.
        </p>

       

       
      </div>
    </div>
  );
};

export default About6;
