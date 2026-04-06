import BusinessLinePage from 'components/common/BusinessLinePage';

const products = [
  { name: 'Polymers (PE/PC/PP/PVC/PET)' },
  { name: 'Desiccants' },
  { name: 'Stabilizers (Lead/Ca-Zn/Ba-Zn/Ba-Cd-Zn)' },
  { name: 'Plasticizers (DOP/ESBO/DOTP/CPW)' },
  { name: 'Anti-Fog Agents' },
  { name: 'Anti Block Agents' },
  { name: 'Anti Static Agents' },
  { name: 'Iron Oxides' },
  { name: 'Glycols' },
  { name: 'Impact Modifiers' },
  { name: 'Processing Aids' },
  { name: 'Activators' },
  { name: 'Vulcanizing Agents' },
  { name: 'Accelerators' },
  { name: 'Anti Degrading Agents' },
  { name: 'Antioxidants' },
  { name: 'Sulphur Donor' },
  { name: 'Retarder' },
  { name: 'Peptizer' },
  { name: 'Carbon Black (ASTM Grade / Speciality Grades)' },
  { name: 'Other Chemicals & Oils' },
  { name: 'Speciality Minerals' },
  { name: 'Other Speciality Additives' },
  { name: 'Masterbatches' },
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
