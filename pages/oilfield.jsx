import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Biocides' },
  { name: 'Corrosion Inhibitors' },
  { name: 'Scale Inhibitors' },
  { name: 'Stabilizing Agents' },
  { name: 'Surfactants' },
  { name: 'Coagulants' },
  { name: 'Oxygen Scavengers' },
  { name: 'Emulsifiers' },
  { name: 'Cleaners' },
  { name: 'Defoamers' },
  { name: 'Activated Carbon' },
  { name: 'Calcium Chloride' },
  { name: 'Xanthan Gum' },
  { name: 'Molecular Sieves' },
  { name: 'Silica Gel' },
  { name: 'Ion Exchange Resins' },
  { name: 'Metal Catalysts for Petrochemical Purification' },
  { name: 'Bed Support: Tabular Alumina, Ceramic, Guard Bed' },
  { name: 'Packing' },
  { name: 'Distillation Column Internals' },
  { name: 'Silicone Additives and Fluids' },
  { name: 'Polymerisation Catalysts' },
  { name: 'Pigments' },
  { name: 'Amines' },
  { name: 'Heat Transfer Fluids' },
  { name: 'Diisobutylene (DIB)' },
  { name: 'Isooctane 100, Isohexadecane' },
  { name: 'Rheology Modifiers' },
  { name: 'Thickeners' },
  { name: 'Viscosifiers' },
  { name: 'Shale Swell Inhibitors' },
  { name: 'Organophilic Clay' },
  { name: 'Dispersants' },
  { name: 'Acid Gas Thickener' },
  { name: 'Cleaning Agents' },
  { name: 'Coupling Agents' },
  { name: 'Foam Stabilisers' },
  { name: 'Wetting Agents' },
  { name: 'Gelling Agents' },
  { name: 'High Viscosity Friction Reducer' },
  { name: 'Clay Stabilisers' },
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
