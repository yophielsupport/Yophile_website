import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { icon: '🫧', name: 'Surfactants', description: 'Enhance cleaning, foaming and wetting properties in detergents, shampoos and body wash formulations.' },
  { icon: '🧴', name: 'Emulsifiers', description: 'Stabilize oil-in-water and water-in-oil emulsions in lotions, creams and conditioners.' },
  { icon: '💆', name: 'Conditioning Agents', description: 'Improve hair softness, manageability and shine in professional and consumer personal care products.' },
  { icon: '💧', name: 'Moisturizers & Humectants', description: 'Attract and retain moisture to maintain healthy, hydrated skin in cosmetic and skincare formulations.' },
  { icon: '🌸', name: 'Fragrances', description: 'High-quality aromatic compounds adding pleasant, lasting scents to personal care and cleaning products.' },
  { icon: '🔬', name: 'Preservatives', description: 'Extend product shelf life and safety by preventing microbial growth in water-based formulations.' },
  { icon: '🧪', name: 'Thickening Agents', description: 'Improve texture, rheology and viscosity of creams, gels and liquid formulations.' },
  { icon: '🛡️', name: 'Antimicrobial Agents', description: 'Ensure hygiene and safety by controlling bacteria, fungi and viruses in personal care products.' },
];

export default function Personal() {
  return (
    <BusinessLinePage
      title="Home, Personal & Industrial Cleaning"
      subtitle="Performance ingredients and specialty chemicals for personal care, home care and industrial cleaning applications."
      heroImage="/img/cardimg/homecarebss.jpg"
      description="Yophiel Internationals provides a broad portfolio of specialty chemicals and performance ingredients for the personal care, home care and industrial cleaning sectors. From surfactants and emulsifiers to active ingredients and preservatives, our solutions are sourced from world-class manufacturers and are fully compliant with international regulatory standards."
      products={products}
    />
  );
}
