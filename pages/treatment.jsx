import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { icon: '🌊', name: 'Coagulants', description: 'Facilitate rapid removal of suspended particles, colloids and turbidity from industrial and municipal water.' },
  { icon: '🔗', name: 'Flocculants', description: 'Aggregate fine particles into larger, settleable flocs for efficient clarification and sludge dewatering.' },
  { icon: '🛡️', name: 'Biocides', description: 'Eliminate harmful bacteria, algae and microorganisms in cooling towers, process water and distribution systems.' },
  { icon: '⚗️', name: 'pH Adjusters', description: 'Balance acidity and alkalinity to protect equipment and optimize chemical treatment efficiency.' },
  { icon: '🔬', name: 'Scale Inhibitors', description: 'Prevent calcium carbonate, sulphate and silica scale buildup in pipes, heat exchangers and membrane systems.' },
  { icon: '⚙️', name: 'Corrosion Inhibitors', description: 'Protect carbon steel, copper alloys and other metals from corrosion in recirculating and open water systems.' },
  { icon: '💧', name: 'Disinfectants', description: 'Ensure safe, potable water by eliminating bacteria and viruses in drinking water and wastewater systems.' },
  { icon: '🫧', name: 'Defoamers', description: 'Control and eliminate foam in industrial water systems, wastewater treatment and process applications.' },
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
