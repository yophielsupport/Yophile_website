import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Surfactants' },
  { name: 'Fatty Acids' },
  { name: 'Foam Boosters' },
  { name: 'Paraffin Oils' },
  { name: 'Fatty Esters' },
  { name: 'Emulsifiers' },
  { name: 'Biocides' },
  { name: 'Preservatives' },
  { name: 'Pearlizing Agents' },
  { name: 'Petroleum Jelly' },
  { name: 'Colorants' },
  { name: 'Fragrances' },
  { name: 'Salts' },
  { name: 'Phosphonates' },
  { name: 'Exfoliants' },
  { name: 'Emollients' },
  { name: 'Oleo Chemicals' },
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
