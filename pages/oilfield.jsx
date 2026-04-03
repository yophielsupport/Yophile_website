import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { icon: '🛡️', name: 'Biocides', description: 'Prevent microbial growth and contamination in oilfield operations and water injection systems.' },
  { icon: '⚙️', name: 'Corrosion Inhibitors', description: 'Protect pipelines, equipment and vessels from corrosion caused by CO₂, H₂S and brine.' },
  { icon: '🔬', name: 'Scale Inhibitors', description: 'Prevent mineral scale formation in production tubing, pipelines and surface equipment.' },
  { icon: '⚗️', name: 'Stabilizing Agents', description: 'Ensure long-term stability of emulsions and chemical formulations under harsh conditions.' },
  { icon: '💧', name: 'Demulsifiers', description: 'Efficiently separate water from crude oil to meet export and refinery specifications.' },
  { icon: '📉', name: 'Friction Reducers', description: 'Lower friction in high-velocity pipeline flows to reduce energy consumption and pump wear.' },
  { icon: '🌊', name: 'Dispersants', description: 'Break down and distribute oil contaminants, preventing deposits and fouling.' },
  { icon: '🚀', name: 'Drag Reducing Agents', description: 'Reduce turbulence in pipelines to dramatically increase throughput and operational efficiency.' },
];

export default function Oilfield() {
  return (
    <BusinessLinePage
      title="Oil & Gas"
      subtitle="Advanced chemical solutions engineered for oilfield, refinery and upstream production environments."
      heroImage="/img/cardimg/oilfeildsbuss.jpg"
      description="Yophiel Internationals delivers a comprehensive range of oilfield and refinery chemicals engineered to enhance productivity, protect infrastructure and reduce operational costs. Our solutions are developed for the most demanding upstream, midstream and downstream applications — backed by technical expertise and a global supply network."
      products={products}
    />
  );
}
