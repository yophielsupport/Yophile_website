import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Polyalphaolefin - PAO' },
  { name: 'Silicone Oils & Derivatives' },
  { name: 'White Mineral Oils' },
  { name: 'Synthetic Esters' },
  { name: 'PAG' },
  { name: 'Base Oils - Group II & III' },
  { name: 'Bright Stocks' },
  { name: 'Fatty Acids, Amines, Esters' },
  { name: 'Amines & Phenols' },
  { name: 'Metal Sulphonates' },
  { name: 'Amines & Fatty Alcohols' },
  { name: 'Sodium Sulphonate' },
  { name: 'Chlorinated Paraffins / Alpha Olefins' },
  { name: 'Calcium Sulphonate' },
  { name: 'ZDDP' },
  { name: 'PPD' },
  { name: 'TBN Boosters' },
  { name: 'Carbon Black' },
  { name: 'Viscosity Modifiers' },
  { name: 'Compressor Oils, Industrial Gear Oils' },
  { name: 'Biodegradable & Biobased Additives' },
  { name: 'Microcrystalline Wax' },
  { name: 'Flocculant' },
  { name: 'Lithium Hydroxide' },
  { name: 'Friction Modifiers' },
  { name: 'Tackifiers' },
  { name: 'Antioxidants' },
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
