import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Epoxy Resins' },
  { name: 'Hardeners' },
  { name: 'Acrylic Emulsions' },
  { name: 'Phenolic Resins' },
  { name: 'Alkyd & Acrylic Polyols' },
  { name: 'Coating Resins - Powder' },
  { name: 'Pigments (Organic / Inorganic)' },
  { name: 'Titanium Oxide' },
  { name: 'Carbon Black' },
  { name: 'Solvent & Water Based Dyes' },
  { name: 'Biocides' },
  { name: 'Waxes' },
  { name: 'Fumed Silica' },
  { name: 'Matting Agents' },
  { name: 'Thickeners' },
  { name: 'Rheology Modifiers' },
  { name: 'pH Stabilizer' },
  { name: 'Driers' },
  { name: 'Defoamers' },
  { name: 'Wetting & Dispersing Agents' },
  { name: 'Surface Protection Agents' },
  { name: 'Fluorosurfactant Agents' },
  { name: 'Calcium Carbonates' },
  { name: 'Silica' },
  { name: 'Talc' },
  { name: 'Mica Products' },
  { name: 'Kaolin Products' },
  { name: 'Construction Chemicals (Binders / Pigments / Additives)' },
  { name: 'Ink Chemicals (Binders / Pigments / Additives)' },
];

export default function Paints() {
  return (
    <BusinessLinePage
      title="Paints & Coatings"
      subtitle="Specialty raw materials and additives for decorative, industrial and protective coatings formulations."
      heroImage="/img/cardimg/homecare.jpg"
      description="Yophiel Internationals supplies a comprehensive range of specialty chemicals, resins, pigments and additives for the paints and coatings industry. Our portfolio covers everything from binders and pigments to rheology modifiers, matting agents and functional fillers — enabling formulators to achieve superior performance, sustainability and compliance across all coating systems."
      products={products}
    />
  );
}
