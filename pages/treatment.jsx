import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Antifoams' },
  { name: 'Biocides' },
  { name: 'Boiler Water Chemicals' },
  { name: 'Coagulants' },
  { name: 'Corrosion Inhibitors' },
  { name: 'Flocculants' },
  { name: 'Neutralizing Agents' },
  { name: 'Oxidants' },
  { name: 'Oxygen Scavengers' },
  { name: 'pH Conditioners' },
  { name: 'Resin Cleaners' },
  { name: 'Scale Inhibitors' },
  { name: 'Disinfectants' },
  { name: 'Cooling Water Chemicals' },
  { name: 'Boiler Treatment Chemicals' },
  { name: 'Dewatering Agents' },
  { name: 'Antiscalant' },
  { name: 'Reverse Osmosis Membrane Treatment' },
  { name: 'Sewage Water Treatment Chemicals' },
  { name: 'Other Chemicals' },
];

export default function Treatment() {
  return (
    <BusinessLinePage
      title="Water Treatment"
      subtitle="Comprehensive chemical solutions for industrial, municipal and process water treatment applications."
      heroImage="/img/cardimg/waterbss.jpg"
      description="Yophiel Internationals offers a full-spectrum portfolio of water treatment chemicals designed to protect industrial infrastructure, ensure regulatory compliance and maximize system efficiency. Our solutions serve power generation, petrochemicals, pharmaceuticals, food & beverage, and municipal water treatment industries worldwide."
      products={products}
    />
  );
}
