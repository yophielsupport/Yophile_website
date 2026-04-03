import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { icon: '🔧', name: 'Plasticizers', description: 'Improve the flexibility, workability and durability of PVC and other polymer systems.' },
  { icon: '🛡️', name: 'Antioxidants', description: 'Prevent oxidative degradation of polymers during processing and throughout the product lifecycle.' },
  { icon: '🔥', name: 'Flame Retardants', description: 'Enhance fire resistance and meet international safety standards for plastic materials and composites.' },
  { icon: '☀️', name: 'UV Stabilizers', description: 'Protect polymers from UV-induced degradation, discolouration and mechanical property loss.' },
  { icon: '⚙️', name: 'Processing Aids', description: 'Improve melt flow, surface finish and processability during extrusion, injection moulding and calendering.' },
  { icon: '⚡', name: 'Antistatic Agents', description: 'Eliminate static electricity buildup in plastics for electronics, packaging and industrial applications.' },
  { icon: '🔬', name: 'Polymerization Inhibitors', description: 'Precisely control the rate of polymerization during synthesis and storage to ensure product consistency.' },
  { icon: '💪', name: 'Crosslinking Agents', description: 'Create molecular crosslinks in polymers to significantly enhance mechanical strength and thermal stability.' },
];

export default function Plastics() {
  return (
    <BusinessLinePage
      title="Plastics & Rubber"
      subtitle="Specialty additives and processing chemicals for the plastics, rubber and polymer industries."
      heroImage="/img/cardimg/plasticbss.jpg"
      description="Yophiel Internationals supplies a comprehensive range of specialty additives and processing chemicals tailored to the plastics and rubber industry. Our product portfolio helps manufacturers achieve superior physical properties, process efficiency and compliance with evolving global regulations — from raw polymer to finished product."
      products={products}
    />
  );
}
