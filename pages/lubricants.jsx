import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { icon: '🔩', name: 'Anti-Wear Additives', description: 'Reduce metal-on-metal wear to extend the service life of bearings, gears and moving components.' },
  { icon: '💪', name: 'Extreme Pressure (EP) Additives', description: 'Protect metal surfaces under high-load and shock-load conditions in industrial and automotive applications.' },
  { icon: '🌡️', name: 'Viscosity Modifiers', description: 'Maintain optimal lubricant viscosity and performance across a wide temperature operating range.' },
  { icon: '🛡️', name: 'Oxidation Inhibitors', description: 'Prevent oil oxidation and degradation, significantly extending oil drain intervals and equipment life.' },
  { icon: '⚙️', name: 'Rust & Corrosion Inhibitors', description: 'Form a protective layer on metal surfaces to prevent rust and corrosion in wet or humid conditions.' },
  { icon: '🧹', name: 'Detergents', description: 'Keep engine and machinery surfaces clean by neutralizing acids and removing harmful deposits.' },
  { icon: '📉', name: 'Friction Modifiers', description: 'Reduce boundary friction in engines and transmissions to improve fuel efficiency and performance.' },
  { icon: '🫧', name: 'Foam Inhibitors', description: 'Suppress foam formation in lubricating oils to prevent cavitation and loss of lubrication.' },
];

export default function Lubricants() {
  return (
    <BusinessLinePage
      title="Lubricants & Grease"
      subtitle="High-performance additive solutions for automotive, industrial and specialty lubricant formulations."
      heroImage="/img/cardimg/lubricantbss.jpg"
      description="Yophiel Internationals supplies a complete portfolio of lubricant and grease additives to formulators and manufacturers worldwide. Our additive packages are designed to meet the latest OEM specifications and industry standards, delivering superior protection, performance and longevity across a wide range of base fluid technologies."
      products={products}
    />
  );
}
